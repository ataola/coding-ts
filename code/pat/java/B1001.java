package code.pat.java;

import java.util.Scanner;

public class B1001 {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    while (in.hasNextInt()) {
      int num = in.nextInt();
      int count = 0;
      while (num != 1) {
        if (num % 2 == 0) {
          num = num >> 1;
        } else {
          num = (3 * num + 1) >> 1;
        }
        count++;
      }
      System.out.println(count);
    }
  }
}