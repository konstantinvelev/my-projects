using SeedAPI.Models.Context;
using System;
using System.Collections.Generic;
using SeedAPI.Models;
using System.Threading.Tasks;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace SeedAPI.Repositories.UserRepositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        private readonly ApplicationContext context;

        public UserRepository(ApplicationContext context)
            : base(context)
        {
            this.context = context;
        }
        public async Task<User> Save(User user)
        {
            try
            {
                await context.Users.AddAsync(user);
                await context.SaveChangesAsync();
                return user;
            }
            catch (Exception ex)
            {
                //ErrorManager.ErrorHandler.HandleError(ex);
                throw ex;
            }
        }

        public async Task<bool> Update(User user)
        {
            try
            {
                var userForUpdate = context.Users.FirstOrDefault(s => s.Id == user.Id);
                var updatedUser = CreateUser(user);

                if (updatedUser == null && userForUpdate == null)
                {
                    throw new Exception("The update was not successfully!");
                }
                userForUpdate = updatedUser;
                context.Users.Update(userForUpdate);
                await context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                //ErrorManager.ErrorHandler.HandleError(ex);
                throw ex;
            }
        }
        public List<User> GetAll()
        {
            try
            {
                return context.Users.ToList();
            }
            catch (Exception ex)
            {
                //ErrorManager.ErrorHandler.HandleError(ex);
                throw ex;
            }
        }

        public async Task<bool> Delete(string id)
        {
            try
            {
                User user = context.Users.Where(x => x.Id.Equals(id)).FirstOrDefault();
                if (user != null)
                {
                    user.IsDeleted = true;
                    await context.SaveChangesAsync();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                //ErrorManager.ErrorHandler.HandleError(ex);
                throw ex;
            }
        }

        private User CreateUser(User user)
        {
            using var MySha = SHA256.Create();
            var newUser = new User()
            {
                Email = user.Email,
                Username = user.Username,
                IsDeleted = user.IsDeleted,
                UpdatedOn= DateTime.UtcNow,
                Password = GetHash(MySha,user.Password),
                UserInfo = user.UserInfo,
            };
            return newUser;
        }
        private static string GetHash(HashAlgorithm hashAlgorithm, string input)
        {

            // Convert the input string to a byte array and compute the hash.
            byte[] data = hashAlgorithm.ComputeHash(Encoding.UTF8.GetBytes(input));

            // Create a new Stringbuilder to collect the bytes
            // and create a string.
            var sBuilder = new StringBuilder();

            // Loop through each byte of the hashed data
            // and format each one as a hexadecimal string.
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }

            // Return the hexadecimal string.
            return sBuilder.ToString();
        }

        //// Verify a hash against a string.
        //private static bool VerifyHash(HashAlgorithm hashAlgorithm, string input, string hash)
        //{
        //    // Hash the input.
        //    var hashOfInput = GetHash(hashAlgorithm, input);

        //    // Create a StringComparer an compare the hashes.
        //    StringComparer comparer = StringComparer.OrdinalIgnoreCase;

        //    return comparer.Compare(hashOfInput, hash) == 0;
        //}
    }
}
