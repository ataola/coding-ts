import java.util.List;
import java.util.ArrayList;

// "static void main" must be defined in a public class.
class MyStack {
  private List<Integer> data; // store elements

  public MyStack() {
    data = new ArrayList<>();
  }

  /** Insert an element into the stack. */
  public void push(int x) {
    data.add(x);
  }

  /** Checks whether the queue is empty or not. */
  public boolean isEmpty() {
    return data.isEmpty();
  }

  /** Get the top item from the queue. */
  public int top() {
    return data.get(data.size() - 1);
  }

  /**
   * Delete an element from the queue. Return true if the operation is successful.
   */
  public boolean pop() {
    if (isEmpty()) {
      return false;
    }
    data.remove(data.size() - 1);
    return true;
  }
};

public class TestMyStack {
  public static void main(String[] args) {
    MyStack s = new MyStack();
    s.push(1);
    s.push(2);
    s.push(3);
    for (int i = 0; i < 4; ++i) {
      if (!s.isEmpty()) {
        System.out.println(s.top());
      }
      System.out.println(s.pop());
    }
  }
}