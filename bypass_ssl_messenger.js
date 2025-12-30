'use strict'

// Hook Java CertificateVerifier bypass to catch verification exception
Java.perform(() => {
    try {
        const CertificateVerifier = Java.use("com.facebook.mobilenetwork.internal.certificateverifier.CertificateVerifier");
        const CertificateVerifier_verify = CertificateVerifier["verify"].overload('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'boolean')

        CertificateVerifier_verify.implementation = function (x509CertificateArr, str, z) {
            try {
                this["verify"](x509CertificateArr, str, z);
                console.log("[*][CertificateVerifier] Verify passed - no bypass");
            } catch (e) {
                console.log(`[*][CertificateVerifier] Trapped certificate verification error, bypassing...`);
                // console.log(`[*][CertificateVerifier] ${e.toString()}`);
            }
        };

        console.log(`[+] Hooked CertificateVerifier`);
    } catch (e) {
        console.log(`[-] CertificateVerifier: ${e}`);
    }
});

