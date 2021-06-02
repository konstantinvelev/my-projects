using System.ComponentModel;

namespace SeedAPI.Commons
{
    public enum Grade
    {
        [Description("You need to study more")]
        Two = 2,

        [Description("Mid 3")]
        Three = 3,

        [Description("Good 4")]
        Four = 4,

        [Description("Very Good 5")]
        Five = 5,

        [Description("Excellent 6")]
        Six = 6
    }
}