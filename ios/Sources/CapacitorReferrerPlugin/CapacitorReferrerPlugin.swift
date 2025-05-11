import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorReferrerPlugin)
public class CapacitorReferrerPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorReferrerPlugin"
    public let jsName = "CapacitorReferrer"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getReferrer", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CapacitorReferrer()

    @objc func getReferrer(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
