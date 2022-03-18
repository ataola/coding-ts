#include <iostream>
#include <stack>
using namespace std;

int main()
{
  // 1. Initialize a stack.
  stack<int> s;
  // 2. Push new element.
  s.push(5);
  s.push(13);
  s.push(8);
  s.push(6);
  // 3. Check if stack is empty.
  if (s.empty())
  {
    cout << "Stack is empty!" << endl;
    return 0;
  }
  // 4. Pop an element.
  s.pop();
  // 5. Get the top element.
  cout << "The top element is: " << s.top() << endl;
  // 6. Get the size of the stack.
  cout << "The size is: " << s.size() << endl;
}