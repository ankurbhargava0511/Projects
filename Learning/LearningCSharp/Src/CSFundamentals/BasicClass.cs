using System;
using System.Collections.Generic;
using System.Text;

namespace CSFundamentals
{
    public class BasicClass
    {
        /*
        Class should be in Namespace
        If you class  is not in Namespace, you class is in Global namespace and may have conflict.
        Class has State and Behaviour
        */

        /*
         Modfiers
         --Public-
         --Private-

             */

        //this is Construstor use to setup initial state of instance
        public BasicClass()
        {
            //this refer the class itself
            this.MyName = "";
        }

        public BasicClass(string name)
        {
            MyName = name;
        }


        // State
        // This is a field
        public string MyName;



        // Behaviour
        //No Return type
        public void AddName(string name)
        {

            MyName = name;
        }
        // Return Type
        public string GetName()
        {
            return MyName;
        }


    }
}
