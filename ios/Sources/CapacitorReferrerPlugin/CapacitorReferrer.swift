import Foundation

@objc public class CapacitorReferrer: NSObject {
    @objc public func getReferrer(_ value: String) -> String {
        print(value)
        return value
    }
}
