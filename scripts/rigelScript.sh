#!/bin/bash

if [ ! "$JAVA_HOME" ]; then
    JAVA_HOME="$(/usr/libexec/java_home)"
fi

localdev=localdev.stanfordhealthcare.org
javacertfile=$JAVA_HOME/jre/lib/security/cacerts
javacertbackupfile=$JAVA_HOME/jre/lib/security/cacerts_SAVE

openssl x509 -in <(openssl s_client -connect $localdev:443 -prexit 2>/dev/null) -out /tmp/localdev.cert

if [ $? = 0 ]; then
    sudo cp -p $javacertfile $javacertbackupfile
    sudo $JAVA_HOME/bin/keytool -importcert -file /tmp/localdev.cert -alias $localdev -keystore $javacertfile
    sudo rm -f /tmp/localdev.cert
else
    echo "Error connecting to $localdev to get the security certificate"
fi
