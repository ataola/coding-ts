#include <iostream>
#include <queue>
using namespace std;

int main()
{
  // 1. Initialize a queue.
  queue<int> q;
  // 2. Push new element.
  q.push(5);
  q.push(13);
  q.push(8);
  q.push(6);
  // 3. Check if queue is empty.
  if (q.empty())
  {
    cout << "Queue is empty!" << endl;
    return 0;
  }
  // 4. Pop an element.
  q.pop();
  // 5. Get the first element.
  cout << "The first element is: " << q.front() << endl;
  // 6. Get the last element.
  cout << "The last element is: " << q.back() << endl;
  // 7. Get the size of the queue.
  cout << "The size is: " << q.size() << endl;
}