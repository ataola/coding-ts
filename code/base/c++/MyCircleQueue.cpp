#include <iostream>
#include <vector>
using namespace std;

class MyCircularQueue
{
private:
  vector<int> data;
  int head;
  int tail;
  int size;

public:
  /** Initialize your data structure here. Set the size of the queue to be k. */
  MyCircularQueue(int k)
  {
    data.resize(k);
    head = -1;
    tail = -1;
    size = k;
  }

  /** Insert an element into the circular queue. Return true if the operation is successful. */
  bool enQueue(int value)
  {
    if (isFull())
    {
      return false;
    }
    if (isEmpty())
    {
      head = 0;
    }
    tail = (tail + 1) % size;
    data[tail] = value;
    return true;
  }

  /** Delete an element from the circular queue. Return true if the operation is successful. */
  bool deQueue()
  {
    if (isEmpty())
    {
      return false;
    }
    if (head == tail)
    {
      head = -1;
      tail = -1;
      return true;
    }
    head = (head + 1) % size;
    return true;
  }

  /** Get the front item from the queue. */
  int Front()
  {
    if (isEmpty())
    {
      return -1;
    }
    return data[head];
  }

  /** Get the last item from the queue. */
  int Rear()
  {
    if (isEmpty())
    {
      return -1;
    }
    return data[tail];
  }

  /** Checks whether the circular queue is empty or not. */
  bool isEmpty()
  {
    return head == -1;
  }

  /** Checks whether the circular queue is full or not. */
  bool isFull()
  {
    return ((tail + 1) % size) == head;
  }
};

int main()
{
  MyCircularQueue obj(6);
  bool param_1 = obj.enQueue(1);
  cout << param_1 << endl;
  bool param_2 = obj.deQueue();
  cout << param_2 << endl;
  int param_3 = obj.Front();
  cout << param_3 << endl;
  int param_4 = obj.Rear();
  cout << param_4 << endl;
  bool param_5 = obj.isEmpty();
  cout << param_5 << endl;
  bool param_6 = obj.isFull();
  cout << param_6 << endl;
}
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * bool param_1 = obj.enQueue(value);
 * bool param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * bool param_5 = obj.isEmpty();
 * bool param_6 = obj.isFull();
 */