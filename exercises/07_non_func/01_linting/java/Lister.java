
import java.util.ArrayList;

public class Lister {

	ArrayList<String> items = new ArrayList<String>();

	private static Lister instance = null
	protected Lister() {

	}
	public static Lister getInstance() {
			if (instance == null) instance = new Lister();
			return instance;
	}

	public void clearList() {
				items.clear();
	}

	public void addItem(String item){
			items.add(item);
				//TODO: We need to check that the item is not a blank string.
	}

public void getItem(int index) {
	/* TODO: we need to check that the index is not negative and 
	that the index does not exceed the size of the array. An error 
	will need to be thrown. */
}

  public String[] getItems(){
    return items.toArray(new String[items.size()]);
  }

}
