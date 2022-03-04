#include <iostream>
using namespace std;

int main()
{
  string s1 = "Hello World";
  cout << "s1 is \"Hello World\"" << endl;
  string s2 = s1;
  cout << "s2 is initialized by s1" << endl;
  string s3(s1);
  cout << "s3 is initialized by s1" << endl;
  // compare by '=='
  cout << "Compared by '==':" << endl;
  cout << "s1 and \"Hello World\": " << (s1 == "Hello World") << endl;
  cout << "s1 and s2: " << (s1 == s2) << endl;
  cout << "s1 and s3: " << (s1 == s3) << endl;
  // compare by 'compare'
  cout << "Compared by 'compare':" << endl;
  cout << "s1 and \"Hello World\": " << !s1.compare("Hello World") << endl;
  cout << "s1 and s2: " << !s1.compare(s2) << endl;
  cout << "s1 and s3: " << !s1.compare(s3) << endl;
}