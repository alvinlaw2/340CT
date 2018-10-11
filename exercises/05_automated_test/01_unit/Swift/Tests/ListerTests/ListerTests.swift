
import XCTest
@testable import Lister

/*
extension ListerTests {
    static var allTests : [(String, ListerTests -> () throws -> Void)] {
        return [
            ("testAddItem", testAddItem)
        ]
    }
}
*/

class ListerTests: XCTestCase {

    var lister = Lister()

    func testAddItem() {
        self.lister.add(item: "Bread")
        let newItem:String = lister.getItem(atIndex: 0)
        XCTAssertEqual(newItem, "Bread")
    }

}