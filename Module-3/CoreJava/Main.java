package com.utils;
ackage com.greetings;

import com.utils.Utility;

module com.utils {
    exports com.utils;
}

public class Utility {
    public static String getMessage() {
        return "Hello from Utility!";
    }
}
module com.greetings {
    requires com.utils;
}
package com.greetings;

import com.utils.Utility;

public class Main {
    public static void main(String[] args) {
        System.out.println(Utility.getMessage());
    }
}
