using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSFundamentals;

namespace CSFundamentalsTests
{
    [TestClass]
    public class CSharpBasicCollectionsTests
    {
        [TestMethod]
        public void ArrayCollectionTest()
        {
            CSharpBasicCollections colA = new CSharpBasicCollections();
            colA.ArrayCollection();
        }
        [TestMethod]
        public void ListCollectionTest()
        {
            CSharpBasicCollections colA = new CSharpBasicCollections();
            colA.ListCollection();
        }
    }
}
