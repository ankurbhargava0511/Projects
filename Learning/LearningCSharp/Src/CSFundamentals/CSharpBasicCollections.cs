using System;
using System.Collections.Generic;
using System.Text;

namespace CSFundamentals
{
    public class CSharpBasicCollections
    {
        public void ArrayCollection()
        {
            //Array has fixed number of items in a definate order, It has a zero base index
            //Array are pure reference Type
            //look up only by index
            //string[] daysOfWeek = 
            //{
            //    "Monday",
            //    "Tuesday"
            //};
            string[] daysOfWeek = new string[7];

            //Assigning value to Array
            daysOfWeek[0] = "Monday";
            daysOfWeek[1] = "Tuesday";
            daysOfWeek[2] = "Wednesday";
            daysOfWeek[3] = "Thursday";
            daysOfWeek[4] = "Friday";
            daysOfWeek[5] = "Saturday";
            daysOfWeek[6] = "Sunday";


            //iterations
            foreach (string day in daysOfWeek)
            {
                Console.WriteLine(day);
            }


            for (int i = 0; i < daysOfWeek.Length; i++)
            {
                Console.WriteLine(daysOfWeek[i]);
            }

            // lookup
            var f = daysOfWeek[4];

            try
            {
                var tesvalue = daysOfWeek[10];
            }
            catch (IndexOutOfRangeException ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine("test index out of range");
            }
        }

        public void ListCollection()
        {
            // List are not fixed size like array
            // lookup only by index
            List<string> daysOfWeek = new List<string>();

            //Assigning value to Array
            daysOfWeek.Add( "Monday");
            daysOfWeek.Add("Tuesday");
            daysOfWeek.Add("Wednesday");
            daysOfWeek.Add("Thursday");
            daysOfWeek.Add("Friday");
            daysOfWeek.Add("Saturday");
            daysOfWeek.Add("Sunday");


            //iterations
            foreach (string day in daysOfWeek)
            {
                Console.WriteLine(day);
            }


            for (int i = 0; i < daysOfWeek.Count; i++)
            {
                Console.WriteLine(daysOfWeek[i]);
            }

            //FindIndex
            int dIndex = daysOfWeek.FindIndex(x => x == "Friday");

            //Below operation have performance hit due to rearrange of data
            daysOfWeek.Remove("Sunday");
            daysOfWeek.RemoveAt(dIndex);
            daysOfWeek.Insert(dIndex, "Friday");

            daysOfWeek.Add("Sunday");


        }
    }
}
