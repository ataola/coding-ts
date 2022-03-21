// "static void main" must be defined in a public class.
public class String2 {
  public static void main(String[] args) {
    String s = "";
    int n = 10000;
    for (int i = 0; i < n; i++) {
      s += "hello";
    }
    System.out.println(s);
  }
}