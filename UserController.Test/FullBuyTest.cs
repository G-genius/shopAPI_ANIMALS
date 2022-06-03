using ShopAPI.Validation;
using Xunit;

namespace UserController.Test
{
    public class FullBuyTest
    {
        private readonly FullBuyValidation _validation;

        public FullBuyTest() => _validation = new FullBuyValidation();

        [Fact]
        public void IsValid_ValidAccountNumber_ReturnsTrue1() => Assert.True(_validation.IsValid("8 930 438-05-76"));
        [Fact]
        public void IsValid_ValidAccountNumber_ReturnsTrue2() => Assert.True(_validation.IsValid("+7 901 353-35-64"));
        [Fact]
        public void IsValid_ValidAccountNumber_ReturnsFalse1() => Assert.False(_validation.IsValid("+7900 553-34-55"));
        [Fact]
        public void IsValid_ValidAccountNumber_ReturnsFalse2() => Assert.False(_validation.IsValid("8 343-333-33-11"));
    }
}
