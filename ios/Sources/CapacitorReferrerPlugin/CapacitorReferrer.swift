import Foundation

@objc public class CapacitorReferrer: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
