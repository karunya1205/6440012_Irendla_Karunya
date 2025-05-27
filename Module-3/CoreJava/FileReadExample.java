import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReadExample {
    public static void main(String[] args) {
        System.out.println("Working directory: " + System.getProperty("user.dir"));

        try (BufferedReader reader = new BufferedReader(new FileReader("output.txt"))) {
            String line;
            System.out.println("Reading from output.txt:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
