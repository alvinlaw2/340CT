
import java.util.ArrayList;

public class Lister {

    ArrayList<String> items = new ArrayList<String>();

    private static Lister instance = null
    protected Lister() {

    }
    public static Lister getInstance() {
        if (instance == null) {
            instance = new Lister();
        }
        return instance;
    }

    public void clearList() {
        items.clear();
    }

    public void addItem(String item) {
        items.add(item);
    }

    public String[] getItems() {
        return items.toArray(new String[items.size()]);
    }

}
