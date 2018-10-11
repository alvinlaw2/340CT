
import Foundation

public class Lister {

    var items:[String]

    init() {
        self.items = []
    }

    public func add(item: String) {
        self.items.append(item)
    }

    public func getItem(atIndex: Int) -> String {
        return self.items[atIndex]
    }

    public var count: Int {
        get {
            return self.items.count
        }
    }
}