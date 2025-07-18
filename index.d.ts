declare module '@appchoose/adjust-react-native-sdk' {
  type Environment = 'sandbox' | 'production'
  type LogLevel = string

  interface AdjustAttribution {
    trackerToken: string
    trackerName: string
    network: string
    campaign: string
    adgroup: string
    creative: string
    clickLabel: string
    costType: string
    costAmount: number
    costCurrency: string
    jsonResponse: string
    fbInstallReferrer: string
  }

  interface AdjustEventTrackingSuccess {
    message: string
    timestamp: string
    adid: string
    eventToken: string
    callbackId: string
    jsonResponse: string
  }

  interface AdjustEventTrackingFailure {
    message: string
    timestamp: string
    adid: string
    eventToken: string
    callbackId: string
    willRetry: boolean
    jsonResponse: string
  }

  interface AdjustSessionTrackingSuccess {
    message: string
    timestamp: string
    adid: string
    jsonResponse: string
  }

  interface AdjustSessionTrackingFailure {
    message: string
    timestamp: string
    adid: string
    willRetry: boolean
    jsonResponse: string
  }

  interface AdjustDeferredDeeplink {
    deeplink: string
  }

  interface AdjustSkanData {
    conversionValue: number
    coarseValue: string
    lockWindow: boolean
    error: string
  }

  interface AdjustPurchaseVerificationResult {
    verificationStatus: string
    code: number
    message: string
  }

  export class AdjustConfig {
    constructor(appToken: string, environment: Environment)

    public setSdkPrefix(sdkPrefix: string): void
    public setLogLevel(level: LogLevel): void
    public disableDeferredDeeplinkOpening(): void
    public setDefaultTracker(defaultTracker: string): void
    public setExternalDeviceId(externalDeviceId: string): void
    public enableDeviceIdsReadingOnce(): void
    public enableCoppaCompliance(): void
    public enableSendingInBackground(): void
    public enableCostDataInAttribution(): void
    public enablePlayStoreKidsCompliance(): void
    public enableLinkMe(): void
    public enablePreinstallTracking(): void
    public enableFirstSessionDelay(): void
    public setPreinstallFilePath(preinstallFilePath: string): void
    public setFbAppId(fbAppId: string): void
    public disableAdServices(): void
    public disableIdfaReading(): void
    public disableIdfvReading(): void
    public disableSkanAttribution(): void
    public disableAppTrackingTransparencyUsage(): void
    public setEventDeduplicationIdsMaxSize(eventDeduplicationIdsMaxSize: number): void
    public setAttConsentWaitingInterval(attConsentWaitingInterval: number): void
    public setUrlStrategy(urlStrategyDomains: string[], useSubdomains: boolean, isDataResidency: boolean): void
    public setStoreInfo(storeInfo: AdjustStoreInfo): void

    public setAttributionCallback(
      callback: (attribution: AdjustAttribution) => void
    ): void

    public setEventTrackingSucceededCallback(
      callback: (eventSuccess: AdjustEventTrackingSuccess) => void
    ): void

    public setEventTrackingFailedCallback(
      callback: (eventFailed: AdjustEventTrackingFailure) => void
    ): void

    public setSessionTrackingSucceededCallback(
      callback: (sessionSuccess: AdjustSessionTrackingSuccess) => void
    ): void

    public setSessionTrackingFailedCallback(
      callback: (sessionFailed: AdjustSessionTrackingFailure) => void
    ): void

    public setDeferredDeeplinkCallback(
      callback: (deeplink: AdjustDeferredDeeplink) => void
    ): void

    public setSkanUpdatedCallback(
      callback: (skanData: AdjustSkanData) => void
    ): void

    static LogLevelVerbose: LogLevel
    static LogLevelDebug: LogLevel
    static LogLevelInfo: LogLevel
    static LogLevelWarn: LogLevel
    static LogLevelError: LogLevel
    static LogLevelAssert: LogLevel
    static LogLevelSuppress: LogLevel
    static EnvironmentSandbox: Environment
    static EnvironmentProduction: Environment
  }

  export class AdjustEvent {
    constructor(eventToken: string)
    public setRevenue(revenue: number, currency: string): void
    public addCallbackParameter(key: string, value: string): void
    public addPartnerParameter(key: string, value: string): void
    public setTransactionId(transactionId: string): void
    public setCallbackId(callbackId: string): void
    public setProductId(productId: string): void
    public setPurchaseToken(purchaseToken: string): void
    public setDeduplicationId(deduplicationId: string): void
  }

  export class AdjustAppStoreSubscription {
    constructor(price: string, currency: string, transactionId: string)
    public setTransactionDate(transactionDate: string): void
    public setSalesRegion(salesRegion: string): void
    public addCallbackParameter(key: string, value: string): void
    public addPartnerParameter(key: string, value: string): void
  }

  export class AdjustPlayStoreSubscription {
    constructor(
      price: number,
      currency: string,
      sku: string,
      orderId: string,
      signature: string,
      purchaseToken: string)
    public setPurchaseTime(purchaseTime: number): void
    public addCallbackParameter(key: string, value: string): void
    public addPartnerParameter(key: string, value: string): void
  }

  export class AdjustThirdPartySharing {
    constructor(isEnabled: boolean | null)
    public addGranularOption(partnerName: string, key: string, value: string): void
    public addPartnerSharingSetting(partnerName: string, key: string, value: boolean): void
  }

  export class AdjustAdRevenue {
    constructor(source: string)
    public setRevenue(revenue: number, currency: string): void
    public setAdImpressionsCount(adImpressionsCount: number): void
    public setAdRevenueNetwork(adRevenueNetwork: string): void
    public setAdRevenueUnit(adRevenueUnit: string): void
    public setAdRevenuePlacement(adRevenuePlacement: string): void
    public addCallbackParameter(key: string, value: string): void
    public addPartnerParameter(key: string, value: string): void
  }

  export class AdjustAppStorePurchase {
    constructor(productId: string, transactionId: string)
  }

  export class AdjustPlayStorePurchase {
    constructor(productId: string, purchaseToken: string)
  }

  export class AdjustDeeplink {
    constructor(deeplink: string)
    public setReferrer(referrer: string): void
  }

  export class AdjustStoreInfo {
    constructor(storeName: string)
    public setStoreAppId(storeAppId: string): void
  }

  export const Adjust: {
    componentWillUnmount: () => void
    initSdk: (adjustConfig: AdjustConfig) => void
    trackEvent: (adjustEvent: AdjustEvent) => void
    enable: () => void
    disable: () => void
    isEnabled: (callback: (enabled: boolean) => void) => void
    switchToOfflineMode: () => void
    switchBackToOnlineMode: () => void
    setPushToken: (token: string) => void
    processDeeplink: (adjustDeeplink: AdjustDeeplink) => void
    trackAdRevenue: (adjustAdRevenue: AdjustAdRevenue) => void
    trackAppStoreSubscription: (adjustAppStoreSubscription: AdjustAppStoreSubscription) => void
    trackPlayStoreSubscription: (adjustPlayStoreSubscription: AdjustPlayStoreSubscription) => void
    addGlobalCallbackParameter: (key: string, value: string) => void
    addGlobalPartnerParameter: (key: string, value: string) => void
    removeGlobalCallbackParameter: (key: string) => void
    removeGlobalPartnerParameter: (key: string) => void
    removeGlobalCallbackParameters: () => void
    removeGlobalPartnerParameters: () => void
    gdprForgetMe: () => void
    getIdfa: (callback: (idfa: string) => void) => void
    getIdfv: (callback: (idfv: string) => void) => void
    getGoogleAdId: (callback: (adid: string) => void) => void
    getAdid: (callback: (adid: string) => void) => void
    getAttribution: (callback: (attribution: AdjustAttribution) => void) => void
    getAmazonAdId: (callback: (adid: string) => void) => void
    getSdkVersion: (callback: (sdkVersion: string) => void) => void
    requestAppTrackingAuthorization: (handler: (status: number) => void) => void
    updateSkanConversionValue: (conversionValue: number, coarseValue: string, lockWindow: boolean, callback: (error: string) => void) => void
    getAppTrackingAuthorizationStatus: (callback: (status: number) => void) => void
    trackThirdPartySharing: (adjustThirdPartySharing: AdjustThirdPartySharing) => void
    trackMeasurementConsent: (measurementConsent: boolean) => void
    resolveLinkWithUrl: (url: string, resolveUrlSuffixArray: string[], callback: (resolvedLink: string) => void) => void
    getLastDeeplink: (callback: (lastDeeplink: string) => void) => void
    verifyAppStorePurchase: (purchase: AdjustAppStorePurchase, callback: (verificationResult: AdjustPurchaseVerificationResult) => void) => void
    verifyAndTrackAppStorePurchase: (adjustEvent: AdjustEvent, callback: (verificationResult: AdjustPurchaseVerificationResult) => void) => void
    verifyPlayStorePurchase: (purchase: AdjustPlayStorePurchase, callback: (verificationResult: AdjustPurchaseVerificationResult) => void) => void
    verifyAndTrackPlayStorePurchase: (adjustEvent: AdjustEvent, callback: (verificationResult: AdjustPurchaseVerificationResult) => void) => void
    processAndResolveDeeplink: (adjustDeeplink: AdjustDeeplink, callback: (resolvedLink: string) => void) => void
    endFirstSessionDelay: () => void
    enableCoppaComplianceInDelay: () => void
    disableCoppaComplianceInDelay: () => void
    enablePlayStoreKidsComplianceInDelay: () => void
    disablePlayStoreKidsComplianceInDelay: () => void
    setExternalDeviceIdInDelay:(externalDeviceId: string) => void
  }
}
