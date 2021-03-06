﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace SeedAPI.Models.Context
{
    public class ApplicationContext : DbContext,IApplicationContext 
    {

        public ApplicationContext(DbContextOptions options) 
            : base(options) { }
     
        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Exam> Exams { get; set; }
        public DbSet<Homework> Homeworks { get; set; }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) =>
            this.SaveChangesAsync(true, cancellationToken);

        public override Task<int> SaveChangesAsync(
            bool acceptAllChangesOnSuccess,
            CancellationToken cancellationToken = default)
        {
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // Needed for Identity models configuration
            base.OnModelCreating(builder);

            builder.Entity<Homework>(entity =>
            {
                entity.HasOne(s => s.Course)
                .WithMany(c => c.Homeworks)
                .HasForeignKey(s => s.CourseId)
                .OnDelete(DeleteBehavior.Restrict);
            });

            builder.Entity<Homework>(entity =>
            {
                entity.HasOne(s => s.User)
                .WithMany(c => c.Homeworks)
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.Restrict);
            });

            builder.Entity<Exam>(entity =>
            {
                entity.HasOne(s => s.Course)
                .WithMany(c => c.Exams)
                .HasForeignKey(s => s.CourseId)
                .OnDelete(DeleteBehavior.Restrict);
            });

            builder.Entity<Exam>(entity =>
            {
                entity.HasOne(s => s.User)
                .WithMany(c => c.Exams)
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.Restrict);
            });

            builder.Entity<Course>(entity =>
            {
                entity.HasOne(s => s.User)
                .WithMany(c => c.Courses)
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.Restrict);
            });


            this.ConfigureUserIdentityRelations(builder);

            var entityTypes = builder.Model.GetEntityTypes().ToList();

            var foreignKeys = entityTypes
                .SelectMany(e => e.GetForeignKeys().Where(f => f.DeleteBehavior == DeleteBehavior.Restrict));
            foreach (var foreignKey in foreignKeys)
            {
                foreignKey.DeleteBehavior = DeleteBehavior.Restrict;
            }
        }

        private void ConfigureUserIdentityRelations(ModelBuilder builder)
             => builder.ApplyConfigurationsFromAssembly(this.GetType().Assembly);

    }
}
