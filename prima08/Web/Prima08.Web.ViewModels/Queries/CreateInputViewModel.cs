namespace Prima08.Web.ViewModels.Queries
{
    using System.ComponentModel.DataAnnotations;

    public class CreateInputViewModel
    {
        [Required]
        [StringLength(50, ErrorMessage = "Името трябва да е по-дълго от 3 и по-кратко от 50 символа!", MinimumLength = 3)]
        public string Name { get; set; }

        [Required]
        [StringLength(10, ErrorMessage = "Номера е задължителен и се състои от 10 цифри!", MinimumLength = 3)]
        public string Number { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public string Question { get; set; }
    }
}
