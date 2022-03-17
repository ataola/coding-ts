#include <iostream>
#include <vector>
using namespace std;

class MyQueue
{
private:
  // store elements
  vector<int> data;
  // a pointer to indicate the start position
  int p_start;

public:
  MyQueue() { p_start = 0; }
  /** Insert an element into the queue. Return true if the operation is successful. */
  bool enQueue(int x)
  {
    data.push_back(x);
    return true;
  }
  /** Delete an element from the queue. Return true if the operation is successful. */
  bool deQueue()
  {
    if (isEmpty())
    {
      return false;
    }
    p_start++;
    return true;
  };
  /** Get the front item from the queue. */
  int Front()
  {
    return data[p_start];
  };
  /** Checks whether the queue is empty or not. */
  bool isEmpty()
  {
    return p_start >= data.size();
  }
};

int main()
{
  MyQueue q;
  q.enQueue(5);
  q.enQueue(3);
  if (!q.isEmpty())
  {
    cout << q.Front() << endl;
  }
  q.deQueue();
  if (!q.isEmpty())
  {
    cout << q.Front() << endl;
  }
  q.deQueue();
  if (!q.isEmpty())
  {
    cout << q.Front() << endl;
  }
}