(self.webpackChunkheifetz = cc11001100_hook("self.webpackChunkheifetz", self.webpackChunkheifetz || [], "assign")).push([[6752], {
  90044: function () {
    Prism.languages.abap = cc11001100_hook("Prism.languages.abap", {
      comment: cc11001100_hook("comment", /^\*.*/m, "object-key-init"),
      string: cc11001100_hook("string", /(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/m, "object-key-init"),
      "string-template": {
        pattern: cc11001100_hook("pattern", /([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init")
      },
      "eol-comment": {
        pattern: cc11001100_hook("pattern", /(^|\s)".*/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "comment", "object-key-init")
      },
      keyword: {
        pattern: cc11001100_hook("pattern", /(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|SELECTOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      number: cc11001100_hook("number", /\b\d+\b/, "object-key-init"),
      operator: {
        pattern: cc11001100_hook("pattern", /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      "string-operator": {
        pattern: cc11001100_hook("pattern", /(\s)&&?(?=\s)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      },
      "token-operator": cc11001100_hook("token-operator", [{
        pattern: cc11001100_hook("pattern", /(\w)(?:->?|=>|[~|{}])(?=\w)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "punctuation", "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /[|{}]/, "object-key-init"),
        alias: cc11001100_hook("alias", "punctuation", "object-key-init")
      }], "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[,.:()]/, "object-key-init")
    }, "assign"), function (e) {
      var t = cc11001100_hook("t", "(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)", "var-init");
      e.languages.abnf = cc11001100_hook("e.languages.abnf", {
        comment: cc11001100_hook("comment", /;.*/, "object-key-init"),
        string: {
          pattern: cc11001100_hook("pattern", /(?:%[is])?"[^"\n\r]*"/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /^%[is]/, "object-key-init")
          }
        },
        range: {
          pattern: cc11001100_hook("pattern", /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i, "object-key-init"),
          alias: cc11001100_hook("alias", "number", "object-key-init")
        },
        terminal: {
          pattern: cc11001100_hook("pattern", /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i, "object-key-init"),
          alias: cc11001100_hook("alias", "number", "object-key-init")
        },
        repetition: {
          pattern: cc11001100_hook("pattern", /(^|[^\w-])(?:\d*\*\d*|\d+)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "operator", "object-key-init")
        },
        definition: {
          pattern: cc11001100_hook("pattern", /(^[ \t]*)(?:[a-z][\w-]*|<[^>\r\n]*>)(?=\s*=)/m, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "keyword", "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /<|>/, "object-key-init")
          }
        },
        "core-rule": {
          pattern: cc11001100_hook("pattern", RegExp("(?:(^|[^<\\w-])" + t + "|<" + t + ">)(?![\\w-])", "i"), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", ["rule", "constant"], "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /<|>/, "object-key-init")
          }
        },
        rule: {
          pattern: cc11001100_hook("pattern", /(^|[^<\w-])[a-z][\w-]*|<[^>\r\n]*>/i, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /<|>/, "object-key-init")
          }
        },
        operator: cc11001100_hook("operator", /=\/?|\//, "object-key-init"),
        punctuation: cc11001100_hook("punctuation", /[()\[\]]/, "object-key-init")
      }, "assign");
    }(Prism), Prism.languages.ada = cc11001100_hook("Prism.languages.ada", {
      comment: cc11001100_hook("comment", /--.*/, "object-key-init"),
      string: cc11001100_hook("string", /"(?:""|[^"\r\f\n])*"/i, "object-key-init"),
      number: cc11001100_hook("number", [{
        pattern: cc11001100_hook("pattern", /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i, "object-key-init")
      }], "object-key-init"),
      "attr-name": cc11001100_hook("attr-name", /\b'\w+/i, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /\.\.?|[,;():]/, "object-key-init"),
      char: cc11001100_hook("char", /'.'/, "object-key-init"),
      variable: cc11001100_hook("variable", /\b[a-z](?:[_a-z\d])*\b/i, "object-key-init")
    }, "assign"), Prism.languages.apacheconf = cc11001100_hook("Prism.languages.apacheconf", {
      comment: cc11001100_hook("comment", /#.*/, "object-key-init"),
      "directive-inline": {
        pattern: cc11001100_hook("pattern", /(^\s*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|Type|UserFile|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferSize|BufferedLogs|CGIDScriptTimeout|CGIMapExtension|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DTracePrivileges|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtFilterDefine|ExtFilterOptions|ExtendedStatus|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|KeepAlive|KeepAliveTimeout|KeptBodySize|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|LanguagePriority|Limit(?:InternalRecursion|Request(?:Body|FieldSize|Fields|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|MMapFile|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|ModMimeUsePathInfo|ModemStandard|MultiviewsMatch|Mutex|NWSSLTrustedCerts|NWSSLUpgradeable|NameVirtualHost|NoProxy|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|RLimitCPU|RLimitMEM|RLimitNPROC|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|SSIETag|SSIEndTag|SSIErrorMsg|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|SRPUnknownUserSeed|SRPVerifierFile|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UseStapling|UserName|VerifyClient|VerifyDepth)|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadStackSize|ThreadsPerChild|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "property", "object-key-init")
      },
      "directive-block": {
        pattern: cc11001100_hook("pattern", /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b *.*>/i, "object-key-init"),
        inside: {
          "directive-block": {
            pattern: cc11001100_hook("pattern", /^<\/?\w+/, "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", /^<\/?/, "object-key-init")
            },
            alias: cc11001100_hook("alias", "tag", "object-key-init")
          },
          "directive-block-parameter": {
            pattern: cc11001100_hook("pattern", /.*[^>]/, "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", /:/, "object-key-init"),
              string: {
                pattern: cc11001100_hook("pattern", /("|').*\1/, "object-key-init"),
                inside: {
                  variable: cc11001100_hook("variable", /[$%]\{?(?:\w\.?[-+:]?)+\}?/, "object-key-init")
                }
              }
            },
            alias: cc11001100_hook("alias", "attr-value", "object-key-init")
          },
          punctuation: cc11001100_hook("punctuation", />/, "object-key-init")
        },
        alias: cc11001100_hook("alias", "tag", "object-key-init")
      },
      "directive-flags": {
        pattern: cc11001100_hook("pattern", /\[(?:\w,?)+\]/, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      },
      string: {
        pattern: cc11001100_hook("pattern", /("|').*\1/, "object-key-init"),
        inside: {
          variable: cc11001100_hook("variable", /[$%]\{?(?:\w\.?[-+:]?)+\}?/, "object-key-init")
        }
      },
      variable: cc11001100_hook("variable", /[$%]\{?(?:\w\.?[-+:]?)+\}?/, "object-key-init"),
      regex: cc11001100_hook("regex", /\^?.*\$|\^.*\$?/, "object-key-init")
    }, "assign"), Prism.languages.apl = cc11001100_hook("Prism.languages.apl", {
      comment: cc11001100_hook("comment", /(?:⍝|#[! ]).*$/m, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /'(?:[^'\r\n]|'')*'/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      number: cc11001100_hook("number", /¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i, "object-key-init"),
      statement: cc11001100_hook("statement", /:[A-Z][a-z][A-Za-z]*\b/, "object-key-init"),
      "system-function": {
        pattern: cc11001100_hook("pattern", /⎕[A-Z]+/i, "object-key-init"),
        alias: cc11001100_hook("alias", "function", "object-key-init")
      },
      constant: cc11001100_hook("constant", /[⍬⌾#⎕⍞]/, "object-key-init"),
      function: cc11001100_hook("function", /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/, "object-key-init"),
      "monadic-operator": {
        pattern: cc11001100_hook("pattern", /[\\\/⌿⍀¨⍨⌶&∥]/, "object-key-init"),
        alias: cc11001100_hook("alias", "operator", "object-key-init")
      },
      "dyadic-operator": {
        pattern: cc11001100_hook("pattern", /[.⍣⍠⍤∘⌸@⌺]/, "object-key-init"),
        alias: cc11001100_hook("alias", "operator", "object-key-init")
      },
      assignment: {
        pattern: cc11001100_hook("pattern", /←/, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      },
      punctuation: cc11001100_hook("punctuation", /[\[;\]()◇⋄]/, "object-key-init"),
      dfn: {
        pattern: cc11001100_hook("pattern", /[{}⍺⍵⍶⍹∇⍫:]/, "object-key-init"),
        alias: cc11001100_hook("alias", "builtin", "object-key-init")
      }
    }, "assign"), Prism.languages.applescript = cc11001100_hook("Prism.languages.applescript", {
      comment: cc11001100_hook("comment", [/\(\*(?:\(\*[\s\S]*?\*\)|[\s\S])*?\*\)/, /--.+/, /#.+/], "object-key-init"),
      string: cc11001100_hook("string", /"(?:\\.|[^"\\\r\n])*"/, "object-key-init"),
      number: cc11001100_hook("number", /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", [/[&=≠≤≥*+\-\/÷^]|[<>]=?/, /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/], "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/, "object-key-init"),
      class: {
        pattern: cc11001100_hook("pattern", /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/, "object-key-init"),
        alias: cc11001100_hook("alias", "builtin", "object-key-init")
      },
      punctuation: cc11001100_hook("punctuation", /[{}():,¬«»《》]/, "object-key-init")
    }, "assign"), Prism.languages.c = cc11001100_hook("Prism.languages.c", Prism.languages.extend("clike", {
      comment: {
        pattern: cc11001100_hook("pattern", /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      "class-name": {
        pattern: cc11001100_hook("pattern", /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      keyword: cc11001100_hook("keyword", /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/, "object-key-init"),
      function: cc11001100_hook("function", /[a-z_]\w*(?=\s*\()/i, "object-key-init"),
      operator: cc11001100_hook("operator", />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/, "object-key-init"),
      number: cc11001100_hook("number", /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("c", "string", {
      macro: {
        pattern: cc11001100_hook("pattern", /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "property", "object-key-init"),
        inside: {
          string: {
            pattern: cc11001100_hook("pattern", /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          },
          directive: {
            pattern: cc11001100_hook("pattern", /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "keyword", "object-key-init")
          }
        }
      },
      constant: cc11001100_hook("constant", /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/, "object-key-init")
    }), delete Prism.languages.c.boolean, Prism.languages.cpp = cc11001100_hook("Prism.languages.cpp", Prism.languages.extend("c", {
      "class-name": {
        pattern: cc11001100_hook("pattern", /(\b(?:class|enum|struct)\s+)\w+/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      keyword: cc11001100_hook("keyword", /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, "object-key-init"),
      number: {
        pattern: cc11001100_hook("pattern", /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      operator: cc11001100_hook("operator", />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("cpp", "string", {
      "raw-string": {
        pattern: cc11001100_hook("pattern", /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }
    }), Prism.languages.arduino = cc11001100_hook("Prism.languages.arduino", Prism.languages.extend("cpp", {
      keyword: cc11001100_hook("keyword", /\b(?:setup|if|else|while|do|for|return|in|instanceof|default|function|loop|goto|switch|case|new|try|throw|catch|finally|null|break|continue|boolean|bool|void|byte|word|string|String|array|int|long|integer|double)\b/, "object-key-init"),
      builtin: cc11001100_hook("builtin", /\b(?:KeyboardController|MouseController|SoftwareSerial|EthernetServer|EthernetClient|LiquidCrystal|LiquidCrystal_I2C|RobotControl|GSMVoiceCall|EthernetUDP|EsploraTFT|HttpClient|RobotMotor|WiFiClient|GSMScanner|FileSystem|Scheduler|GSMServer|YunClient|YunServer|IPAddress|GSMClient|GSMModem|Keyboard|Ethernet|Console|GSMBand|Esplora|Stepper|Process|WiFiUDP|GSM_SMS|Mailbox|USBHost|Firmata|PImage|Client|Server|GSMPIN|FileIO|Bridge|Serial|EEPROM|Stream|Mouse|Audio|Servo|File|Task|GPRS|WiFi|Wire|TFT|GSM|SPI|SD|runShellCommandAsynchronously|analogWriteResolution|retrieveCallingNumber|printFirmwareVersion|analogReadResolution|sendDigitalPortPair|noListenOnLocalhost|readJoystickButton|setFirmwareVersion|readJoystickSwitch|scrollDisplayRight|getVoiceCallStatus|scrollDisplayLeft|writeMicroseconds|delayMicroseconds|beginTransmission|getSignalStrength|runAsynchronously|getAsynchronously|listenOnLocalhost|getCurrentCarrier|readAccelerometer|messageAvailable|sendDigitalPorts|lineFollowConfig|countryNameWrite|runShellCommand|readStringUntil|rewindDirectory|readTemperature|setClockDivider|readLightSensor|endTransmission|analogReference|detachInterrupt|countryNameRead|attachInterrupt|encryptionType|readBytesUntil|robotNameWrite|readMicrophone|robotNameRead|cityNameWrite|userNameWrite|readJoystickY|readJoystickX|mouseReleased|openNextFile|scanNetworks|noInterrupts|digitalWrite|beginSpeaker|mousePressed|isActionDone|mouseDragged|displayLogos|noAutoscroll|addParameter|remoteNumber|getModifiers|keyboardRead|userNameRead|waitContinue|processInput|parseCommand|printVersion|readNetworks|writeMessage|blinkVersion|cityNameRead|readMessage|setDataMode|parsePacket|isListening|setBitOrder|beginPacket|isDirectory|motorsWrite|drawCompass|digitalRead|clearScreen|serialEvent|rightToLeft|setTextSize|leftToRight|requestFrom|keyReleased|compassRead|analogWrite|interrupts|WiFiServer|disconnect|playMelody|parseFloat|autoscroll|getPINUsed|setPINUsed|setTimeout|sendAnalog|readSlider|analogRead|beginWrite|createChar|motorsStop|keyPressed|tempoWrite|readButton|subnetMask|debugPrint|macAddress|writeGreen|randomSeed|attachGPRS|readString|sendString|remotePort|releaseAll|mouseMoved|background|getXChange|getYChange|answerCall|getResult|voiceCall|endPacket|constrain|getSocket|writeJSON|getButton|available|connected|findUntil|readBytes|exitValue|readGreen|writeBlue|startLoop|IPAddress|isPressed|sendSysex|pauseMode|gatewayIP|setCursor|getOemKey|tuneWrite|noDisplay|loadImage|switchPIN|onRequest|onReceive|changePIN|playFile|noBuffer|parseInt|overflow|checkPIN|knobRead|beginTFT|bitClear|updateIR|bitWrite|position|writeRGB|highByte|writeRed|setSpeed|readBlue|noStroke|remoteIP|transfer|shutdown|hangCall|beginSMS|endWrite|attached|maintain|noCursor|checkReg|checkPUK|shiftOut|isValid|shiftIn|pulseIn|connect|println|localIP|pinMode|getIMEI|display|noBlink|process|getBand|running|beginSD|drawBMP|lowByte|setBand|release|bitRead|prepare|pointTo|readRed|setMode|noFill|remove|listen|stroke|detach|attach|noTone|exists|buffer|height|bitSet|circle|config|cursor|random|IRread|setDNS|endSMS|getKey|micros|millis|begin|print|write|ready|flush|width|isPIN|blink|clear|press|mkdir|rmdir|close|point|yield|image|BSSID|click|delay|read|text|move|peek|beep|rect|line|open|seek|fill|size|turn|stop|home|find|step|tone|sqrt|RSSI|SSID|end|bit|tan|cos|sin|pow|map|abs|max|min|get|run|put)\b/, "object-key-init"),
      constant: cc11001100_hook("constant", /\b(?:DIGITAL_MESSAGE|FIRMATA_STRING|ANALOG_MESSAGE|REPORT_DIGITAL|REPORT_ANALOG|INPUT_PULLUP|SET_PIN_MODE|INTERNAL2V56|SYSTEM_RESET|LED_BUILTIN|INTERNAL1V1|SYSEX_START|INTERNAL|EXTERNAL|DEFAULT|OUTPUT|INPUT|HIGH|LOW)\b/, "object-key-init")
    }), "assign"), Prism.languages.autoit = cc11001100_hook("Prism.languages.autoit", {
      comment: cc11001100_hook("comment", [/;.*/, {
        pattern: cc11001100_hook("pattern", /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      url: {
        pattern: cc11001100_hook("pattern", /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      string: {
        pattern: cc11001100_hook("pattern", /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          variable: cc11001100_hook("variable", /([%$@])\w+\1/, "object-key-init")
        }
      },
      directive: {
        pattern: cc11001100_hook("pattern", /(^\s*)#\w+/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      },
      function: cc11001100_hook("function", /\b\w+(?=\()/, "object-key-init"),
      variable: cc11001100_hook("variable", /[$@]\w+/, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i, "object-key-init"),
      number: cc11001100_hook("number", /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:True|False)\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[\[\]().,:]/, "object-key-init")
    }, "assign"), function (e) {
      var t = cc11001100_hook("t", "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", "var-init"),
        n = cc11001100_hook("n", {
          environment: {
            pattern: cc11001100_hook("pattern", RegExp("\\$" + t), "object-key-init"),
            alias: cc11001100_hook("alias", "constant", "object-key-init")
          },
          variable: cc11001100_hook("variable", [{
            pattern: cc11001100_hook("pattern", /\$?\(\([\s\S]+?\)\)/, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            inside: {
              variable: cc11001100_hook("variable", [{
                pattern: cc11001100_hook("pattern", /(^\$\(\([\s\S]+)\)\)/, "object-key-init"),
                lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
              }, /^\$\(\(/], "object-key-init"),
              number: cc11001100_hook("number", /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/, "object-key-init"),
              operator: cc11001100_hook("operator", /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/, "object-key-init"),
              punctuation: cc11001100_hook("punctuation", /\(\(?|\)\)?|,|;/, "object-key-init")
            }
          }, {
            pattern: cc11001100_hook("pattern", /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            inside: {
              variable: cc11001100_hook("variable", /^\$\(|^`|\)$|`$/, "object-key-init")
            }
          }, {
            pattern: cc11001100_hook("pattern", /\$\{[^}]+\}/, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            inside: {
              operator: cc11001100_hook("operator", /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, "object-key-init"),
              punctuation: cc11001100_hook("punctuation", /[\[\]]/, "object-key-init"),
              environment: {
                pattern: cc11001100_hook("pattern", RegExp("(\\{)" + t), "object-key-init"),
                lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
                alias: cc11001100_hook("alias", "constant", "object-key-init")
              }
            }
          }, /\$(?:\w+|[#?*!@$])/], "object-key-init"),
          entity: cc11001100_hook("entity", /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/, "object-key-init")
        }, "var-init");
      e.languages.bash = cc11001100_hook("e.languages.bash", {
        shebang: {
          pattern: cc11001100_hook("pattern", /^#!\s*\/.*/, "object-key-init"),
          alias: cc11001100_hook("alias", "important", "object-key-init")
        },
        comment: {
          pattern: cc11001100_hook("pattern", /(^|[^"{\\$])#.*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        "function-name": cc11001100_hook("function-name", [{
          pattern: cc11001100_hook("pattern", /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "function", "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", /\b\w+(?=\s*\(\s*\)\s*\{)/, "object-key-init"),
          alias: cc11001100_hook("alias", "function", "object-key-init")
        }], "object-key-init"),
        "for-or-select": {
          pattern: cc11001100_hook("pattern", /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, "object-key-init"),
          alias: cc11001100_hook("alias", "variable", "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        "assign-left": {
          pattern: cc11001100_hook("pattern", /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, "object-key-init"),
          inside: {
            environment: {
              pattern: cc11001100_hook("pattern", RegExp("(^|[\\s;|&]|[<>]\\()" + t), "object-key-init"),
              lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
              alias: cc11001100_hook("alias", "constant", "object-key-init")
            }
          },
          alias: cc11001100_hook("alias", "variable", "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        string: cc11001100_hook("string", [{
          pattern: cc11001100_hook("pattern", /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: cc11001100_hook("inside", n, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: cc11001100_hook("inside", n, "object-key-init")
        }], "object-key-init"),
        environment: {
          pattern: cc11001100_hook("pattern", RegExp("\\$?" + t), "object-key-init"),
          alias: cc11001100_hook("alias", "constant", "object-key-init")
        },
        variable: cc11001100_hook("variable", n.variable, "object-key-init"),
        function: {
          pattern: cc11001100_hook("pattern", /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        keyword: {
          pattern: cc11001100_hook("pattern", /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        builtin: {
          pattern: cc11001100_hook("pattern", /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "class-name", "object-key-init")
        },
        boolean: {
          pattern: cc11001100_hook("pattern", /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        "file-descriptor": {
          pattern: cc11001100_hook("pattern", /\B&\d\b/, "object-key-init"),
          alias: cc11001100_hook("alias", "important", "object-key-init")
        },
        operator: {
          pattern: cc11001100_hook("pattern", /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/, "object-key-init"),
          inside: {
            "file-descriptor": {
              pattern: cc11001100_hook("pattern", /^\d/, "object-key-init"),
              alias: cc11001100_hook("alias", "important", "object-key-init")
            }
          }
        },
        punctuation: cc11001100_hook("punctuation", /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, "object-key-init"),
        number: {
          pattern: cc11001100_hook("pattern", /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }
      }, "assign");
      for (var r = cc11001100_hook("r", ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], "var-init"), i = cc11001100_hook("i", n.variable[1].inside, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < r.length; a++) i[r[a]] = cc11001100_hook("i[r[a]]", e.languages.bash[r[a]], "assign");
      e.languages.shell = cc11001100_hook("e.languages.shell", e.languages.bash, "assign");
    }(Prism), Prism.languages.bbcode = cc11001100_hook("Prism.languages.bbcode", {
      tag: {
        pattern: cc11001100_hook("pattern", /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/, "object-key-init"),
        inside: {
          tag: {
            pattern: cc11001100_hook("pattern", /^\[\/?[^\s=\]]+/, "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", /^\[\/?/, "object-key-init")
            }
          },
          "attr-value": {
            pattern: cc11001100_hook("pattern", /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/i, "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", [/^=/, {
                pattern: cc11001100_hook("pattern", /^(\s*)["']|["']$/, "object-key-init"),
                lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
              }], "object-key-init")
            }
          },
          punctuation: cc11001100_hook("punctuation", /\]/, "object-key-init"),
          "attr-name": cc11001100_hook("attr-name", /[^\s=\]]+/, "object-key-init")
        }
      }
    }, "assign"), Prism.languages.shortcode = cc11001100_hook("Prism.languages.shortcode", Prism.languages.bbcode, "assign"), Prism.languages.bnf = cc11001100_hook("Prism.languages.bnf", {
      string: {
        pattern: cc11001100_hook("pattern", /"[^\r\n"]*"|'[^\r\n']*'/, "object-key-init")
      },
      definition: {
        pattern: cc11001100_hook("pattern", /<[^<>\r\n\t]+>(?=\s*::=)/, "object-key-init"),
        alias: cc11001100_hook("alias", ["rule", "keyword"], "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /^<|>$/, "object-key-init")
        }
      },
      rule: {
        pattern: cc11001100_hook("pattern", /<[^<>\r\n\t]+>/, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /^<|>$/, "object-key-init")
        }
      },
      operator: cc11001100_hook("operator", /::=|[|()[\]{}*+?]|\.{3}/, "object-key-init")
    }, "assign"), Prism.languages.rbnf = cc11001100_hook("Prism.languages.rbnf", Prism.languages.bnf, "assign"), Prism.languages.brainfuck = cc11001100_hook("Prism.languages.brainfuck", {
      pointer: {
        pattern: cc11001100_hook("pattern", /<|>/, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      },
      increment: {
        pattern: cc11001100_hook("pattern", /\+/, "object-key-init"),
        alias: cc11001100_hook("alias", "inserted", "object-key-init")
      },
      decrement: {
        pattern: cc11001100_hook("pattern", /-/, "object-key-init"),
        alias: cc11001100_hook("alias", "deleted", "object-key-init")
      },
      branching: {
        pattern: cc11001100_hook("pattern", /\[|\]/, "object-key-init"),
        alias: cc11001100_hook("alias", "important", "object-key-init")
      },
      operator: cc11001100_hook("operator", /[.,]/, "object-key-init"),
      comment: cc11001100_hook("comment", /\S+/, "object-key-init")
    }, "assign"), Prism.languages.bro = cc11001100_hook("Prism.languages.bro", {
      comment: {
        pattern: cc11001100_hook("pattern", /(^|[^\\$])#.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: {
          italic: cc11001100_hook("italic", /\b(?:TODO|FIXME|XXX)\b/, "object-key-init")
        }
      },
      string: {
        pattern: cc11001100_hook("pattern", /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      boolean: cc11001100_hook("boolean", /\b[TF]\b/, "object-key-init"),
      function: {
        pattern: cc11001100_hook("pattern", /(?:function|hook|event) \w+(?:::\w+)?/, "object-key-init"),
        inside: {
          keyword: cc11001100_hook("keyword", /^(?:function|hook|event)/, "object-key-init")
        }
      },
      variable: {
        pattern: cc11001100_hook("pattern", /(?:global|local) \w+/i, "object-key-init"),
        inside: {
          keyword: cc11001100_hook("keyword", /(?:global|local)/, "object-key-init")
        }
      },
      builtin: cc11001100_hook("builtin", /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/, "object-key-init"),
      constant: {
        pattern: cc11001100_hook("pattern", /const \w+/i, "object-key-init"),
        inside: {
          keyword: cc11001100_hook("keyword", /const/, "object-key-init")
        }
      },
      keyword: cc11001100_hook("keyword", /\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/, "object-key-init"),
      operator: cc11001100_hook("operator", /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/, "object-key-init"),
      number: cc11001100_hook("number", /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\];(),.:]/, "object-key-init")
    }, "assign"), function (e) {
      function t(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return e.replace(/<<(\d+)>>/g, function (e, n) {
          return "(?:" + t[+n] + ")";
        });
      }
      function n(e, n, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        return RegExp(t(e, n), r || "");
      }
      function r(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        for (var n = cc11001100_hook("n", 0, "var-init"); n < t; n++) e = cc11001100_hook("e", e.replace(/<<self>>/g, function () {
          return "(?:" + e + ")";
        }), "assign");
        return e.replace(/<<self>>/g, "[^\\s\\S]");
      }
      var i = cc11001100_hook("i", "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void", "var-init"),
        a = cc11001100_hook("a", "class enum interface struct", "var-init"),
        s = cc11001100_hook("s", "add alias ascending async await by descending from get global group into join let nameof notnull on orderby partial remove select set unmanaged value when where where", "var-init"),
        o = cc11001100_hook("o", "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield", "var-init");
      function l(e) {
        cc11001100_hook("e", e, "function-parameter");
        return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
      }
      var d = cc11001100_hook("d", l(a), "var-init"),
        c = cc11001100_hook("c", RegExp(l(i + " " + a + " " + s + " " + o)), "var-init"),
        p = cc11001100_hook("p", l(a + " " + s + " " + o), "var-init"),
        u = cc11001100_hook("u", l(i + " " + a + " " + o), "var-init"),
        E = cc11001100_hook("E", r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2), "var-init"),
        m = cc11001100_hook("m", r(/\((?:[^()]|<<self>>)*\)/.source, 2), "var-init"),
        b = cc11001100_hook("b", /@?\b[A-Za-z_]\w*\b/.source, "var-init"),
        g = cc11001100_hook("g", t(/<<0>>(?:\s*<<1>>)?/.source, [b, E]), "var-init"),
        S = cc11001100_hook("S", t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [p, g]), "var-init"),
        f = cc11001100_hook("f", /\[\s*(?:,\s*)*\]/.source, "var-init"),
        _ = cc11001100_hook("_", t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [E, m, f]), "var-init"),
        T = cc11001100_hook("T", t(/\(<<0>>+(?:,<<0>>+)+\)/.source, [_]), "var-init"),
        I = cc11001100_hook("I", t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [T, S, f]), "var-init"),
        h = cc11001100_hook("h", {
          keyword: cc11001100_hook("keyword", c, "object-key-init"),
          punctuation: cc11001100_hook("punctuation", /[<>()?,.:[\]]/, "object-key-init")
        }, "var-init"),
        R = cc11001100_hook("R", /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source, "var-init"),
        N = cc11001100_hook("N", /"(?:\\.|[^\\"\r\n])*"/.source, "var-init"),
        A = cc11001100_hook("A", /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source, "var-init");
      e.languages.csharp = cc11001100_hook("e.languages.csharp", e.languages.extend("clike", {
        string: cc11001100_hook("string", [{
          pattern: cc11001100_hook("pattern", n(/(^|[^$\\])<<0>>/.source, [A]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", n(/(^|[^@$\\])<<0>>/.source, [N]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", RegExp(R), "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "character", "object-key-init")
        }], "object-key-init"),
        "class-name": cc11001100_hook("class-name", [{
          pattern: cc11001100_hook("pattern", n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [S]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", h, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [b, I]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", h, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", n(/(\busing\s+)<<0>>(?=\s*=)/.source, [b]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", n(/(\b<<0>>\s+)<<1>>/.source, [d, g]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", h, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", n(/(\bcatch\s*\(\s*)<<0>>/.source, [S]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", h, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", n(/(\bwhere\s+)<<0>>/.source, [b]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", n(/(\b(?:is|as)\s+)<<0>>/.source, [I]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", h, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", n(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+in))/.source, [I, u, b]), "object-key-init"),
          inside: cc11001100_hook("inside", h, "object-key-init")
        }], "object-key-init"),
        keyword: cc11001100_hook("keyword", c, "object-key-init"),
        number: cc11001100_hook("number", /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i, "object-key-init"),
        operator: cc11001100_hook("operator", />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/, "object-key-init"),
        punctuation: cc11001100_hook("punctuation", /\?\.?|::|[{}[\];(),.:]/, "object-key-init")
      }), "assign"), e.languages.insertBefore("csharp", "number", {
        range: {
          pattern: cc11001100_hook("pattern", /\.\./, "object-key-init"),
          alias: cc11001100_hook("alias", "operator", "object-key-init")
        }
      }), e.languages.insertBefore("csharp", "punctuation", {
        "named-parameter": {
          pattern: cc11001100_hook("pattern", n(/([(,]\s*)<<0>>(?=\s*:)/.source, [b]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "punctuation", "object-key-init")
        }
      }), e.languages.insertBefore("csharp", "class-name", {
        namespace: {
          pattern: cc11001100_hook("pattern", n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [b]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
          }
        },
        "type-expression": {
          pattern: cc11001100_hook("pattern", n(/(\b(?:default|typeof|sizeof)\s*\(\s*)(?:[^()\s]|\s(?!\s*\))|<<0>>)*(?=\s*\))/.source, [m]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "class-name", "object-key-init"),
          inside: cc11001100_hook("inside", h, "object-key-init")
        },
        "return-type": {
          pattern: cc11001100_hook("pattern", n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [I, S]), "object-key-init"),
          inside: cc11001100_hook("inside", h, "object-key-init"),
          alias: cc11001100_hook("alias", "class-name", "object-key-init")
        },
        "constructor-invocation": {
          pattern: cc11001100_hook("pattern", n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [I]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", h, "object-key-init"),
          alias: cc11001100_hook("alias", "class-name", "object-key-init")
        },
        "generic-method": {
          pattern: cc11001100_hook("pattern", n(/<<0>>\s*<<1>>(?=\s*\()/.source, [b, E]), "object-key-init"),
          inside: {
            function: cc11001100_hook("function", n(/^<<0>>/.source, [b]), "object-key-init"),
            generic: {
              pattern: cc11001100_hook("pattern", RegExp(E), "object-key-init"),
              alias: cc11001100_hook("alias", "class-name", "object-key-init"),
              inside: cc11001100_hook("inside", h, "object-key-init")
            }
          }
        },
        "type-list": {
          pattern: cc11001100_hook("pattern", n(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source, [d, g, b, I, c.source]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            keyword: cc11001100_hook("keyword", c, "object-key-init"),
            "class-name": {
              pattern: cc11001100_hook("pattern", RegExp(I), "object-key-init"),
              greedy: cc11001100_hook("greedy", !0, "object-key-init"),
              inside: cc11001100_hook("inside", h, "object-key-init")
            },
            punctuation: cc11001100_hook("punctuation", /,/, "object-key-init")
          }
        },
        preprocessor: {
          pattern: cc11001100_hook("pattern", /(^\s*)#.*/m, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "property", "object-key-init"),
          inside: {
            directive: {
              pattern: cc11001100_hook("pattern", /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/, "object-key-init"),
              lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
              alias: cc11001100_hook("alias", "keyword", "object-key-init")
            }
          }
        }
      });
      var O = cc11001100_hook("O", N + "|" + R, "var-init"),
        C = cc11001100_hook("C", t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*[\s\S]*?\*\/|<<0>>/.source, [O]), "var-init"),
        y = cc11001100_hook("y", r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [C]), 2), "var-init"),
        L = cc11001100_hook("L", /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source, "var-init"),
        P = cc11001100_hook("P", t(/<<0>>(?:\s*\(<<1>>*\))?/.source, [S, y]), "var-init");
      e.languages.insertBefore("csharp", "class-name", {
        attribute: {
          pattern: cc11001100_hook("pattern", n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [L, P]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            target: {
              pattern: cc11001100_hook("pattern", n(/^<<0>>(?=\s*:)/.source, [L]), "object-key-init"),
              alias: cc11001100_hook("alias", "keyword", "object-key-init")
            },
            "attribute-arguments": {
              pattern: cc11001100_hook("pattern", n(/\(<<0>>*\)/.source, [y]), "object-key-init"),
              inside: cc11001100_hook("inside", e.languages.csharp, "object-key-init")
            },
            "class-name": {
              pattern: cc11001100_hook("pattern", RegExp(S), "object-key-init"),
              inside: {
                punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
              }
            },
            punctuation: cc11001100_hook("punctuation", /[:,]/, "object-key-init")
          }
        }
      });
      var v = cc11001100_hook("v", /:[^}\r\n]+/.source, "var-init"),
        w = cc11001100_hook("w", r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [C]), 2), "var-init"),
        D = cc11001100_hook("D", t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [w, v]), "var-init"),
        k = cc11001100_hook("k", r(t(/[^"'/()]|\/(?!\*)|\/\*.*?\*\/|<<0>>|\(<<self>>*\)/.source, [O]), 2), "var-init"),
        x = cc11001100_hook("x", t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [k, v]), "var-init");
      function U(t, r) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        return {
          interpolation: {
            pattern: cc11001100_hook("pattern", n(/([^{](?:\{\{)*)<<0>>/.source, [t]), "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            inside: {
              "format-string": {
                pattern: cc11001100_hook("pattern", n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [r, v]), "object-key-init"),
                lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
                inside: {
                  punctuation: cc11001100_hook("punctuation", /^:/, "object-key-init")
                }
              },
              punctuation: cc11001100_hook("punctuation", /^\{|\}$/, "object-key-init"),
              expression: {
                pattern: cc11001100_hook("pattern", /[\s\S]+/, "object-key-init"),
                alias: cc11001100_hook("alias", "language-csharp", "object-key-init"),
                inside: cc11001100_hook("inside", e.languages.csharp, "object-key-init")
              }
            }
          },
          string: cc11001100_hook("string", /[\s\S]+/, "object-key-init")
        };
      }
      e.languages.insertBefore("csharp", "string", {
        "interpolation-string": cc11001100_hook("interpolation-string", [{
          pattern: cc11001100_hook("pattern", n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [D]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: cc11001100_hook("inside", U(D, w), "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [x]), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: cc11001100_hook("inside", U(x, k), "object-key-init")
        }], "object-key-init")
      });
    }(Prism), Prism.languages.dotnet = cc11001100_hook("Prism.languages.dotnet", Prism.languages.cs = cc11001100_hook("Prism.languages.cs", Prism.languages.csharp, "assign"), "assign"), Prism.languages.clojure = cc11001100_hook("Prism.languages.clojure", {
      comment: cc11001100_hook("comment", /;.*/, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /"(?:[^"\\]|\\.)*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      operator: cc11001100_hook("operator", /(?:::|[:|'])\b[a-z][\w*+!?-]*\b/i, "object-key-init"),
      keyword: {
        pattern: cc11001100_hook("pattern", /([^\w+*'?-])(?:def|if|do|let|\.\.|quote|var|->>|->|fn|loop|recur|throw|try|monitor-enter|\.|new|set!|def\-|defn|defn\-|defmacro|defmulti|defmethod|defstruct|defonce|declare|definline|definterface|defprotocol|==|defrecord|>=|deftype|<=|defproject|ns|\*|\+|\-|\/|<|=|>|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|conj|cons|constantly|cond|if-not|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|deref|difference|disj|dissoc|distinct|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|for|fnseq|frest|gensym|get-proxy-class|get|hash-map|hash-set|identical\?|identity|if-let|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|line-seq|list\*|list|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|time|to-array|to-array-2d|tree-seq|true\?|union|up|update-proxy|val|vals|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[^\w+*'?-])/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      boolean: cc11001100_hook("boolean", /\b(?:true|false|nil)\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b[\da-f]+\b/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}\[\](),]/, "object-key-init")
    }, "assign"), Prism.languages.cmake = cc11001100_hook("Prism.languages.cmake", {
      comment: cc11001100_hook("comment", /#.*/, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /"(?:[^\\"]|\\.)*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: {
            pattern: cc11001100_hook("pattern", /\${(?:[^{}$]|\${[^{}$]*})*}/, "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", /\${|}/, "object-key-init"),
              variable: cc11001100_hook("variable", /\w+/, "object-key-init")
            }
          }
        }
      },
      variable: cc11001100_hook("variable", /\b(?:CMAKE_\w+|\w+_(?:VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?|(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT)|(?:CTEST_CUSTOM_(?:MAXIMUM_(?:(?:FAIL|PASS)ED_TEST_OUTPUT_SIZE|NUMBER_OF_(?:ERROR|WARNING)S)|ERROR_(?:P(?:OST|RE)_CONTEXT|EXCEPTION|MATCH)|P(?:OST|RE)_MEMCHECK|WARNING_(?:EXCEPTION|MATCH)|(?:MEMCHECK|TESTS)_IGNORE|P(?:OST|RE)_TEST|COVERAGE_EXCLUDE)|ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/, "object-key-init"),
      property: cc11001100_hook("property", /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ARCHIVE_OUTPUT_NAME|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEBUG_POSTFIX|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:ON|OFF|TRUE|FALSE)\b/, "object-key-init"),
      namespace: cc11001100_hook("namespace", /\b(?:PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/, "object-key-init"),
      operator: cc11001100_hook("operator", /\b(?:NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/, "object-key-init"),
      inserted: {
        pattern: cc11001100_hook("pattern", /\b\w+::\w+\b/, "object-key-init"),
        alias: cc11001100_hook("alias", "class-name", "object-key-init")
      },
      number: cc11001100_hook("number", /\b\d+(?:\.\d+)*\b/, "object-key-init"),
      function: cc11001100_hook("function", /\b[a-z_]\w*(?=\s*\()\b/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[()>}]|\$[<{]/, "object-key-init")
    }, "assign"), Prism.languages.d = cc11001100_hook("Prism.languages.d", Prism.languages.extend("clike", {
      comment: cc11001100_hook("comment", [{
        pattern: cc11001100_hook("pattern", /^\s*#!.+/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", RegExp(/(^|[^\\])/.source + "(?:" + [/\/\+(?:\/\+[\s\S]*?\+\/|(?!\/\+)[\s\S])*?\+\//.source, /\/\/.*/.source, /\/\*[\s\S]*?\*\//.source].join("|") + ")"), "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      string: cc11001100_hook("string", [{
        pattern: cc11001100_hook("pattern", RegExp([/\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source, /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source, /\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source, /\bq"(.)[\s\S]*?\2"/.source, /'(?:\\(?:\W|\w+)|[^\\])'/.source, /(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source].join("|"), "m"), "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\bq\{(?:\{[^{}]*\}|[^{}])*\}/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "token-string", "object-key-init")
      }], "object-key-init"),
      number: cc11001100_hook("number", [/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i, {
        pattern: cc11001100_hook("pattern", /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      keyword: cc11001100_hook("keyword", /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/, "object-key-init"),
      operator: cc11001100_hook("operator", /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("d", "keyword", {
      property: cc11001100_hook("property", /\B@\w*/, "object-key-init")
    }), Prism.languages.insertBefore("d", "function", {
      register: {
        pattern: cc11001100_hook("pattern", /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      }
    }), Prism.languages.dart = cc11001100_hook("Prism.languages.dart", Prism.languages.extend("clike", {
      string: cc11001100_hook("string", [{
        pattern: cc11001100_hook("pattern", /r?("""|''')[\s\S]*?\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /r?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      keyword: cc11001100_hook("keyword", [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/], "object-key-init"),
      operator: cc11001100_hook("operator", /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("dart", "function", {
      metadata: {
        pattern: cc11001100_hook("pattern", /@\w+/, "object-key-init"),
        alias: cc11001100_hook("alias", "symbol", "object-key-init")
      }
    }), function (e) {
      e.languages.diff = cc11001100_hook("e.languages.diff", {
        coord: cc11001100_hook("coord", [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m], "object-key-init")
      }, "assign");
      var t = cc11001100_hook("t", {
        "deleted-sign": cc11001100_hook("deleted-sign", "-", "object-key-init"),
        "deleted-arrow": cc11001100_hook("deleted-arrow", "<", "object-key-init"),
        "inserted-sign": cc11001100_hook("inserted-sign", "+", "object-key-init"),
        "inserted-arrow": cc11001100_hook("inserted-arrow", ">", "object-key-init"),
        unchanged: cc11001100_hook("unchanged", " ", "object-key-init"),
        diff: cc11001100_hook("diff", "!", "object-key-init")
      }, "var-init");
      Object.keys(t).forEach(function (n) {
        var r = cc11001100_hook("r", t[n], "var-init"),
          i = cc11001100_hook("i", [], "var-init");
        /^\w+$/.test(n) || i.push(/\w+/.exec(n)[0]), "diff" === n && i.push("bold"), e.languages.diff[n] = cc11001100_hook("e.languages.diff[n]", {
          pattern: cc11001100_hook("pattern", RegExp("^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"), "object-key-init"),
          alias: cc11001100_hook("alias", i, "object-key-init")
        }, "assign");
      }), Object.defineProperty(e.languages.diff, "PREFIXES", {
        value: cc11001100_hook("value", t, "object-key-init")
      });
    }(Prism), function (e) {
      function t(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return "___" + e.toUpperCase() + t + "___";
      }
      Object.defineProperties(e.languages["markup-templating"] = cc11001100_hook("e.languages[\"markup-templating\"]", {}, "assign"), {
        buildPlaceholders: {
          value: function (n, r, i, a) {
            if (n.language === r) {
              var s = cc11001100_hook("s", n.tokenStack = cc11001100_hook("n.tokenStack", [], "assign"), "var-init");
              n.code = cc11001100_hook("n.code", n.code.replace(i, function (e) {
                if ("function" == typeof a && !a(e)) return e;
                for (var i, o = cc11001100_hook("o", s.length, "var-init"); -1 !== n.code.indexOf(i = cc11001100_hook("i", t(r, o), "assign"));) ++o;
                return s[o] = cc11001100_hook("s[o]", e, "assign"), i;
              }), "assign"), n.grammar = cc11001100_hook("n.grammar", e.languages.markup, "assign");
            }
          }
        },
        tokenizePlaceholders: {
          value: function (n, r) {
            if (n.language === r && n.tokenStack) {
              n.grammar = cc11001100_hook("n.grammar", e.languages[r], "assign");
              var i = cc11001100_hook("i", 0, "var-init"),
                a = cc11001100_hook("a", Object.keys(n.tokenStack), "var-init");
              !function s(o) {
                for (var l = cc11001100_hook("l", 0, "var-init"); l < o.length && !(i >= a.length); l++) {
                  var d = cc11001100_hook("d", o[l], "var-init");
                  if ("string" == typeof d || d.content && "string" == typeof d.content) {
                    var c = cc11001100_hook("c", a[i], "var-init"),
                      p = cc11001100_hook("p", n.tokenStack[c], "var-init"),
                      u = cc11001100_hook("u", "string" == typeof d ? d : d.content, "var-init"),
                      E = cc11001100_hook("E", t(r, c), "var-init"),
                      m = cc11001100_hook("m", u.indexOf(E), "var-init");
                    if (m > -1) {
                      ++i;
                      var b = cc11001100_hook("b", u.substring(0, m), "var-init"),
                        g = cc11001100_hook("g", new e.Token(r, e.tokenize(p, n.grammar), "language-" + r, p), "var-init"),
                        S = cc11001100_hook("S", u.substring(m + E.length), "var-init"),
                        f = cc11001100_hook("f", [], "var-init");
                      b && f.push.apply(f, s([b])), f.push(g), S && f.push.apply(f, s([S])), "string" == typeof d ? o.splice.apply(o, [l, 1].concat(f)) : d.content = cc11001100_hook("d.content", f, "assign");
                    }
                  } else d.content && s(d.content);
                }
                return o;
              }(n.tokens);
            }
          }
        }
      });
    }(Prism), function (e) {
      e.languages.django = cc11001100_hook("e.languages.django", {
        comment: cc11001100_hook("comment", /^{#[\s\S]*?#}$/, "object-key-init"),
        tag: {
          pattern: cc11001100_hook("pattern", /(^{%[+-]?\s*)\w+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "keyword", "object-key-init")
        },
        delimiter: {
          pattern: cc11001100_hook("pattern", /^{[{%][+-]?|[+-]?[}%]}$/, "object-key-init"),
          alias: cc11001100_hook("alias", "punctuation", "object-key-init")
        },
        string: {
          pattern: cc11001100_hook("pattern", /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        },
        filter: {
          pattern: cc11001100_hook("pattern", /(\|)\w+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "function", "object-key-init")
        },
        test: {
          pattern: cc11001100_hook("pattern", /(\bis\s+(?:not\s+)?)(?!not\b)\w+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "function", "object-key-init")
        },
        function: cc11001100_hook("function", /\b[a-z_]\w+(?=\s*\()/i, "object-key-init"),
        keyword: cc11001100_hook("keyword", /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/, "object-key-init"),
        operator: cc11001100_hook("operator", /[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, "object-key-init"),
        number: cc11001100_hook("number", /\b\d+(?:\.\d+)?\b/, "object-key-init"),
        boolean: cc11001100_hook("boolean", /[Tt]rue|[Ff]alse|[Nn]one/, "object-key-init"),
        variable: cc11001100_hook("variable", /\b\w+?\b/, "object-key-init"),
        punctuation: cc11001100_hook("punctuation", /[{}[\](),.:;]/, "object-key-init")
      }, "assign");
      var t = cc11001100_hook("t", /{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g, "var-init"),
        n = cc11001100_hook("n", e.languages["markup-templating"], "var-init");
      e.hooks.add("before-tokenize", function (e) {
        n.buildPlaceholders(e, "django", t);
      }), e.hooks.add("after-tokenize", function (e) {
        n.tokenizePlaceholders(e, "django");
      }), e.languages.jinja2 = cc11001100_hook("e.languages.jinja2", e.languages.django, "assign"), e.hooks.add("before-tokenize", function (e) {
        n.buildPlaceholders(e, "jinja2", t);
      }), e.hooks.add("after-tokenize", function (e) {
        n.tokenizePlaceholders(e, "jinja2");
      });
    }(Prism), Prism.languages.docker = cc11001100_hook("Prism.languages.docker", {
      keyword: {
        pattern: cc11001100_hook("pattern", /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      string: cc11001100_hook("string", /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/, "object-key-init"),
      comment: cc11001100_hook("comment", /#.*/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /---|\.\.\.|[:[\]{}\-,|>?]/, "object-key-init")
    }, "assign"), Prism.languages.dockerfile = cc11001100_hook("Prism.languages.dockerfile", Prism.languages.docker, "assign"), Prism.languages.ebnf = cc11001100_hook("Prism.languages.ebnf", {
      comment: cc11001100_hook("comment", /\(\*[\s\S]*?\*\)/, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /"[^"\r\n]*"|'[^'\r\n]*'/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      special: {
        pattern: cc11001100_hook("pattern", /\?[^?\r\n]*\?/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "class-name", "object-key-init")
      },
      definition: {
        pattern: cc11001100_hook("pattern", /^(\s*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", ["rule", "keyword"], "object-key-init")
      },
      rule: cc11001100_hook("rule", /[a-z]\w*(?:[ \t]+[a-z]\w*)*/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /\([:/]|[:/]\)|[.,;()[\]{}]/, "object-key-init"),
      operator: cc11001100_hook("operator", /[-=|*/!]/, "object-key-init")
    }, "assign"), Prism.languages.eiffel = cc11001100_hook("Prism.languages.eiffel", {
      comment: cc11001100_hook("comment", /--.*/, "object-key-init"),
      string: cc11001100_hook("string", [{
        pattern: cc11001100_hook("pattern", /"([^[]*)\[[\s\S]*?\]\1"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /"([^{]*)\{[\s\S]*?\}\1"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /"(?:%\s+%|%.|[^%"\r\n])*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      char: cc11001100_hook("char", /'(?:%.|[^%'\r\n])+'/, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:True|False)\b/i, "object-key-init"),
      "class-name": {
        pattern: cc11001100_hook("pattern", /\b[A-Z][\dA-Z_]*\b/, "object-key-init"),
        alias: cc11001100_hook("alias", "builtin", "object-key-init")
      },
      number: cc11001100_hook("number", [/\b0[xcb][\da-f](?:_*[\da-f])*\b/i, /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/i], "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/, "object-key-init"),
      operator: cc11001100_hook("operator", /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/, "object-key-init")
    }, "assign"), Prism.languages.elixir = cc11001100_hook("Prism.languages.elixir", {
      comment: cc11001100_hook("comment", /#.*/m, "object-key-init"),
      regex: {
        pattern: cc11001100_hook("pattern", /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      string: cc11001100_hook("string", [{
        pattern: cc11001100_hook("pattern", /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {}
      }, {
        pattern: cc11001100_hook("pattern", /("""|''')[\s\S]*?\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {}
      }, {
        pattern: cc11001100_hook("pattern", /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {}
      }], "object-key-init"),
      atom: {
        pattern: cc11001100_hook("pattern", /(^|[^:]):\w+/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "symbol", "object-key-init")
      },
      "attr-name": cc11001100_hook("attr-name", /\w+\??:(?!:)/, "object-key-init"),
      capture: {
        pattern: cc11001100_hook("pattern", /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "function", "object-key-init")
      },
      argument: {
        pattern: cc11001100_hook("pattern", /(^|[^&])&\d+/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      },
      attribute: {
        pattern: cc11001100_hook("pattern", /@\w+/, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      },
      number: cc11001100_hook("number", /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:true|false|nil)\b/, "object-key-init"),
      operator: cc11001100_hook("operator", [/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, {
        pattern: cc11001100_hook("pattern", /([^<])<(?!<)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /([^>])>(?!>)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /<<|>>|[.,%\[\]{}()]/, "object-key-init")
    }, "assign"), Prism.languages.elixir.string.forEach(function (e) {
      e.inside = cc11001100_hook("e.inside", {
        interpolation: {
          pattern: cc11001100_hook("pattern", /#\{[^}]+\}/, "object-key-init"),
          inside: {
            delimiter: {
              pattern: cc11001100_hook("pattern", /^#\{|\}$/, "object-key-init"),
              alias: cc11001100_hook("alias", "punctuation", "object-key-init")
            },
            rest: cc11001100_hook("rest", Prism.languages.elixir, "object-key-init")
          }
        }
      }, "assign");
    }), Prism.languages.elm = cc11001100_hook("Prism.languages.elm", {
      comment: cc11001100_hook("comment", /--.*|{-[\s\S]*?-}/, "object-key-init"),
      char: {
        pattern: cc11001100_hook("pattern", /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      string: cc11001100_hook("string", [{
        pattern: cc11001100_hook("pattern", /"""[\s\S]*?"""/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      import_statement: {
        pattern: cc11001100_hook("pattern", /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m, "object-key-init"),
        inside: {
          keyword: cc11001100_hook("keyword", /\b(?:import|as|exposing)\b/, "object-key-init")
        }
      },
      keyword: cc11001100_hook("keyword", /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/, "object-key-init"),
      builtin: cc11001100_hook("builtin", /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/, "object-key-init"),
      hvariable: cc11001100_hook("hvariable", /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/, "object-key-init"),
      constant: cc11001100_hook("constant", /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\]|(),.:]/, "object-key-init")
    }, "assign"), function (e) {
      e.languages.ruby = cc11001100_hook("e.languages.ruby", e.languages.extend("clike", {
        comment: cc11001100_hook("comment", [/#.*/, {
          pattern: cc11001100_hook("pattern", /^=begin\s[\s\S]*?^=end/m, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        }], "object-key-init"),
        "class-name": {
          pattern: cc11001100_hook("pattern", /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /[.\\]/, "object-key-init")
          }
        },
        keyword: cc11001100_hook("keyword", /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/, "object-key-init")
      }), "assign");
      var t = cc11001100_hook("t", {
        pattern: cc11001100_hook("pattern", /#\{[^}]+\}/, "object-key-init"),
        inside: {
          delimiter: {
            pattern: cc11001100_hook("pattern", /^#\{|\}$/, "object-key-init"),
            alias: cc11001100_hook("alias", "tag", "object-key-init")
          },
          rest: cc11001100_hook("rest", e.languages.ruby, "object-key-init")
        }
      }, "var-init");
      delete e.languages.ruby.function, e.languages.insertBefore("ruby", "keyword", {
        regex: cc11001100_hook("regex", [{
          pattern: cc11001100_hook("pattern", /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            interpolation: cc11001100_hook("interpolation", t, "object-key-init")
          }
        }, {
          pattern: cc11001100_hook("pattern", /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            interpolation: cc11001100_hook("interpolation", t, "object-key-init")
          }
        }, {
          pattern: cc11001100_hook("pattern", /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            interpolation: cc11001100_hook("interpolation", t, "object-key-init")
          }
        }, {
          pattern: cc11001100_hook("pattern", /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            interpolation: cc11001100_hook("interpolation", t, "object-key-init")
          }
        }, {
          pattern: cc11001100_hook("pattern", /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            interpolation: cc11001100_hook("interpolation", t, "object-key-init")
          }
        }, {
          pattern: cc11001100_hook("pattern", /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        }], "object-key-init"),
        variable: cc11001100_hook("variable", /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/, "object-key-init"),
        symbol: {
          pattern: cc11001100_hook("pattern", /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        "method-definition": {
          pattern: cc11001100_hook("pattern", /(\bdef\s+)[\w.]+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            function: cc11001100_hook("function", /\w+$/, "object-key-init"),
            rest: cc11001100_hook("rest", e.languages.ruby, "object-key-init")
          }
        }
      }), e.languages.insertBefore("ruby", "number", {
        builtin: cc11001100_hook("builtin", /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/, "object-key-init"),
        constant: cc11001100_hook("constant", /\b[A-Z]\w*(?:[?!]|\b)/, "object-key-init")
      }), e.languages.ruby.string = cc11001100_hook("e.languages.ruby.string", [{
        pattern: cc11001100_hook("pattern", /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: cc11001100_hook("interpolation", t, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: cc11001100_hook("interpolation", t, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: cc11001100_hook("interpolation", t, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: cc11001100_hook("interpolation", t, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: cc11001100_hook("interpolation", t, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: cc11001100_hook("interpolation", t, "object-key-init")
        }
      }], "assign"), e.languages.rb = cc11001100_hook("e.languages.rb", e.languages.ruby, "assign");
    }(Prism), function (e) {
      e.languages.erb = cc11001100_hook("e.languages.erb", e.languages.extend("ruby", {}), "assign"), e.languages.insertBefore("erb", "comment", {
        delimiter: {
          pattern: cc11001100_hook("pattern", /^<%=?|%>$/, "object-key-init"),
          alias: cc11001100_hook("alias", "punctuation", "object-key-init")
        }
      }), e.hooks.add("before-tokenize", function (t) {
        e.languages["markup-templating"].buildPlaceholders(t, "erb", /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm);
      }), e.hooks.add("after-tokenize", function (t) {
        e.languages["markup-templating"].tokenizePlaceholders(t, "erb");
      });
    }(Prism), Prism.languages.erlang = cc11001100_hook("Prism.languages.erlang", {
      comment: cc11001100_hook("comment", /%.+/, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /"(?:\\.|[^\\"\r\n])*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      "quoted-function": {
        pattern: cc11001100_hook("pattern", /'(?:\\.|[^\\'\r\n])+'(?=\()/, "object-key-init"),
        alias: cc11001100_hook("alias", "function", "object-key-init")
      },
      "quoted-atom": {
        pattern: cc11001100_hook("pattern", /'(?:\\.|[^\\'\r\n])+'/, "object-key-init"),
        alias: cc11001100_hook("alias", "atom", "object-key-init")
      },
      boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/, "object-key-init"),
      number: cc11001100_hook("number", [/\$\\?./, /\d+#[a-z0-9]+/i, /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i], "object-key-init"),
      function: cc11001100_hook("function", /\b[a-z][\w@]*(?=\()/, "object-key-init"),
      variable: {
        pattern: cc11001100_hook("pattern", /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      operator: cc11001100_hook("operator", [/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/, {
        pattern: cc11001100_hook("pattern", /(^|[^<])<(?!<)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^>])>(?!>)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      atom: cc11001100_hook("atom", /\b[a-z][\w@]*/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[()[\]{}:;,.#|]|<<|>>/, "object-key-init")
    }, "assign"), function (e) {
      var t = cc11001100_hook("t", {
          function: cc11001100_hook("function", /\b(?:TODOS?|FIX(?:MES?)?|NOTES?|BUGS?|XX+|HACKS?|WARN(?:ING)?|\?{2,}|!{2,})\b/, "object-key-init")
        }, "var-init"),
        n = cc11001100_hook("n", {
          number: cc11001100_hook("number", /\\[^\s']|%\w/, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          comment: cc11001100_hook("comment", [{
            pattern: cc11001100_hook("pattern", /(^|\s)(?:! .*|!$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            inside: cc11001100_hook("inside", t, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)\/\*\s[\s\S]*?\*\/(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            inside: cc11001100_hook("inside", t, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)!\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            inside: cc11001100_hook("inside", t, "object-key-init")
          }], "object-key-init"),
          number: cc11001100_hook("number", [{
            pattern: cc11001100_hook("pattern", /(^|\s)[+-]?\d+(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)[+-]?0(?:b[01]+|o[0-7]+|d\d+|x[\dA-F]+)(?=\s|$)/i, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)[+-]?\d+\/\d+\.?(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)\+?\d+\+\d+\/\d+(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)-\d+-\d+\/\d+(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)[+-]?(?:\d*\.\d+|\d+\.\d*|\d+)(?:e[+-]?\d+)?(?=\s|$)/i, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)NAN:\s+[\da-fA-F]+(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)[+-]?0(?:b1\.[01]*|o1\.[0-7]*|d1\.\d*|x1\.[\dA-F]*)p\d+(?=\s|$)/i, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }], "object-key-init"),
          regexp: {
            pattern: cc11001100_hook("pattern", /(^|\s)R\/\s+(?:\\\S|[^\\/])*\/(?:[idmsr]*|[idmsr]+-[idmsr]+)(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "number", "object-key-init"),
            inside: {
              variable: cc11001100_hook("variable", /\\\S/, "object-key-init"),
              keyword: cc11001100_hook("keyword", /[+?*\[\]^$(){}.|]/, "object-key-init"),
              operator: {
                pattern: cc11001100_hook("pattern", /(\/)[idmsr]+(?:-[idmsr]+)?/, "object-key-init"),
                lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
              }
            }
          },
          boolean: {
            pattern: cc11001100_hook("pattern", /(^|\s)[tf](?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          },
          "custom-string": {
            pattern: cc11001100_hook("pattern", /(^|\s)[A-Z0-9\-]+"\s(?:\\\S|[^"\\])*"/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "string", "object-key-init"),
            inside: {
              number: cc11001100_hook("number", /\\\S|%\w|\//, "object-key-init")
            }
          },
          "multiline-string": cc11001100_hook("multiline-string", [{
            pattern: cc11001100_hook("pattern", /(^|\s)STRING:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*;(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "string", "object-key-init"),
            inside: {
              number: cc11001100_hook("number", n.number, "object-key-init"),
              "semicolon-or-setlocal": {
                pattern: cc11001100_hook("pattern", /((?:\n|\r\n)\s*);(?=\s|$)/, "object-key-init"),
                lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
                alias: cc11001100_hook("alias", "function", "object-key-init")
              }
            }
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)HEREDOC:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*\S+(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "string", "object-key-init"),
            inside: cc11001100_hook("inside", n, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|\s)\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "string", "object-key-init"),
            inside: cc11001100_hook("inside", n, "object-key-init")
          }], "object-key-init"),
          "special-using": {
            pattern: cc11001100_hook("pattern", /(^|\s)USING:(?:\s\S+)*(?=\s+;(?:\s|$))/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "function", "object-key-init"),
            inside: {
              string: {
                pattern: cc11001100_hook("pattern", /(\s)[^:\s]+/, "object-key-init"),
                lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
              }
            }
          },
          "stack-effect-delimiter": cc11001100_hook("stack-effect-delimiter", [{
            pattern: cc11001100_hook("pattern", /(^|\s)(?:call|execute|eval)?\((?=\s)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "operator", "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(\s)--(?=\s)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "operator", "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(\s)\)(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "operator", "object-key-init")
          }], "object-key-init"),
          combinators: {
            pattern: cc11001100_hook("pattern", null, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "keyword", "object-key-init")
          },
          "kernel-builtin": {
            pattern: cc11001100_hook("pattern", null, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "variable", "object-key-init")
          },
          "sequences-builtin": {
            pattern: cc11001100_hook("pattern", null, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "variable", "object-key-init")
          },
          "math-builtin": {
            pattern: cc11001100_hook("pattern", null, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "variable", "object-key-init")
          },
          "constructor-word": {
            pattern: cc11001100_hook("pattern", /(^|\s)<(?!=+>|-+>)\S+>(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "keyword", "object-key-init")
          },
          "other-builtin-syntax": {
            pattern: cc11001100_hook("pattern", null, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "operator", "object-key-init")
          },
          "conventionally-named-word": {
            pattern: cc11001100_hook("pattern", /(^|\s)(?!")(?:(?:set|change|with|new)-\S+|\$\S+|>[^>\s]+|[^:>\s]+>|[^>\s]+>[^>\s]+|\+[^+\s]+\+|[^?\s]+\?|\?[^?\s]+|[^>\s]+>>|>>[^>\s]+|[^<\s]+<<|\([^()\s]+\)|[^!\s]+!|[^*\s]\S*\*|[^.\s]\S*\.)(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "keyword", "object-key-init")
          },
          "colon-syntax": {
            pattern: cc11001100_hook("pattern", /(^|\s)(?:[A-Z0-9\-]+#?)?:{1,2}\s+(?:;\S+|(?!;)\S+)(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "function", "object-key-init")
          },
          "semicolon-or-setlocal": {
            pattern: cc11001100_hook("pattern", /(\s)(?:;|:>)(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "function", "object-key-init")
          },
          "curly-brace-literal-delimiter": cc11001100_hook("curly-brace-literal-delimiter", [{
            pattern: cc11001100_hook("pattern", /(^|\s)[a-z]*\{(?=\s)/i, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "operator", "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(\s)\}(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "operator", "object-key-init")
          }], "object-key-init"),
          "quotation-delimiter": cc11001100_hook("quotation-delimiter", [{
            pattern: cc11001100_hook("pattern", /(^|\s)\[(?=\s)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "operator", "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(\s)\](?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "operator", "object-key-init")
          }], "object-key-init"),
          "normal-word": {
            pattern: cc11001100_hook("pattern", /(^|\s)[^"\s]\S*(?=\s|$)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          },
          string: {
            pattern: cc11001100_hook("pattern", /"(?:\\\S|[^"\\])*"/, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            inside: cc11001100_hook("inside", n, "object-key-init")
          }
        }, "var-init"),
        i = function (e) {
          return (e + "").replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
        },
        a = function (e) {
          return new RegExp("(^|\\s)(?:" + e.map(i).join("|") + ")(?=\\s|$)");
        },
        s = cc11001100_hook("s", {
          "kernel-builtin": cc11001100_hook("kernel-builtin", ["or", "2nipd", "4drop", "tuck", "wrapper", "nip", "wrapper?", "callstack>array", "die", "dupd", "callstack", "callstack?", "3dup", "hashcode", "pick", "4nip", "build", ">boolean", "nipd", "clone", "5nip", "eq?", "?", "=", "swapd", "2over", "clear", "2dup", "get-retainstack", "not", "tuple?", "dup", "3nipd", "call", "-rotd", "object", "drop", "assert=", "assert?", "-rot", "execute", "boa", "get-callstack", "curried?", "3drop", "pickd", "overd", "over", "roll", "3nip", "swap", "and", "2nip", "rotd", "throw", "(clone)", "hashcode*", "spin", "reach", "4dup", "equal?", "get-datastack", "assert", "2drop", "<wrapper>", "boolean?", "identity-hashcode", "identity-tuple?", "null", "composed?", "new", "5drop", "rot", "-roll", "xor", "identity-tuple", "boolean"], "object-key-init"),
          "other-builtin-syntax": cc11001100_hook("other-builtin-syntax", ["=======", "recursive", "flushable", ">>", "<<<<<<", "M\\", "B", "PRIVATE>", "\\", "======", "final", "inline", "delimiter", "deprecated", "<PRIVATE", ">>>>>>", "<<<<<<<", "parse-complex", "malformed-complex", "read-only", ">>>>>>>", "call-next-method", "<<", "foldable", "$", "$[", "${"], "object-key-init"),
          "sequences-builtin": cc11001100_hook("sequences-builtin", ["member-eq?", "mismatch", "append", "assert-sequence=", "longer", "repetition", "clone-like", "3sequence", "assert-sequence?", "last-index-from", "reversed", "index-from", "cut*", "pad-tail", "join-as", "remove-eq!", "concat-as", "but-last", "snip", "nths", "nth", "sequence", "longest", "slice?", "<slice>", "remove-nth", "tail-slice", "empty?", "tail*", "member?", "virtual-sequence?", "set-length", "drop-prefix", "iota", "unclip", "bounds-error?", "unclip-last-slice", "non-negative-integer-expected", "non-negative-integer-expected?", "midpoint@", "longer?", "?set-nth", "?first", "rest-slice", "prepend-as", "prepend", "fourth", "sift", "subseq-start", "new-sequence", "?last", "like", "first4", "1sequence", "reverse", "slice", "virtual@", "repetition?", "set-last", "index", "4sequence", "max-length", "set-second", "immutable-sequence", "first2", "first3", "supremum", "unclip-slice", "suffix!", "insert-nth", "tail", "3append", "short", "suffix", "concat", "flip", "immutable?", "reverse!", "2sequence", "sum", "delete-all", "indices", "snip-slice", "<iota>", "check-slice", "sequence?", "head", "append-as", "halves", "sequence=", "collapse-slice", "?second", "slice-error?", "product", "bounds-check?", "bounds-check", "immutable", "virtual-exemplar", "harvest", "remove", "pad-head", "last", "set-fourth", "cartesian-product", "remove-eq", "shorten", "shorter", "reversed?", "shorter?", "shortest", "head-slice", "pop*", "tail-slice*", "but-last-slice", "iota?", "append!", "cut-slice", "new-resizable", "head-slice*", "sequence-hashcode", "pop", "set-nth", "?nth", "second", "join", "immutable-sequence?", "<reversed>", "3append-as", "virtual-sequence", "subseq?", "remove-nth!", "length", "last-index", "lengthen", "assert-sequence", "copy", "move", "third", "first", "tail?", "set-first", "prefix", "bounds-error", "<repetition>", "exchange", "surround", "cut", "min-length", "set-third", "push-all", "head?", "subseq-start-from", "delete-slice", "rest", "sum-lengths", "head*", "infimum", "remove!", "glue", "slice-error", "subseq", "push", "replace-slice", "subseq-as", "unclip-last"], "object-key-init"),
          "math-builtin": cc11001100_hook("math-builtin", ["number=", "next-power-of-2", "?1+", "fp-special?", "imaginary-part", "float>bits", "number?", "fp-infinity?", "bignum?", "fp-snan?", "denominator", "gcd", "*", "+", "fp-bitwise=", "-", "u>=", "/", ">=", "bitand", "power-of-2?", "log2-expects-positive", "neg?", "<", "log2", ">", "integer?", "number", "bits>double", "2/", "zero?", "bits>float", "float?", "shift", "ratio?", "rect>", "even?", "ratio", "fp-sign", "bitnot", ">fixnum", "complex?", "/i", "integer>fixnum", "/f", "sgn", ">bignum", "next-float", "u<", "u>", "mod", "recip", "rational", ">float", "2^", "integer", "fixnum?", "neg", "fixnum", "sq", "bignum", ">rect", "bit?", "fp-qnan?", "simple-gcd", "complex", "<fp-nan>", "real", ">fraction", "double>bits", "bitor", "rem", "fp-nan-payload", "real-part", "log2-expects-positive?", "prev-float", "align", "unordered?", "float", "fp-nan?", "abs", "bitxor", "integer>fixnum-strict", "u<=", "odd?", "<=", "/mod", ">integer", "real?", "rational?", "numerator"], "object-key-init")
        }, "var-init");
      Object.keys(s).forEach(function (e) {
        r[e].pattern = cc11001100_hook("r[e].pattern", a(s[e]), "assign");
      });
      r.combinators.pattern = cc11001100_hook("r.combinators.pattern", a(["2bi", "while", "2tri", "bi*", "4dip", "both?", "same?", "tri@", "curry", "prepose", "3bi", "?if", "tri*", "2keep", "3keep", "curried", "2keepd", "when", "2bi*", "2tri*", "4keep", "bi@", "keepdd", "do", "unless*", "tri-curry", "if*", "loop", "bi-curry*", "when*", "2bi@", "2tri@", "with", "2with", "either?", "bi", "until", "3dip", "3curry", "tri-curry*", "tri-curry@", "bi-curry", "keepd", "compose", "2dip", "if", "3tri", "unless", "tuple", "keep", "2curry", "tri", "most", "while*", "dip", "composed", "bi-curry@", "find-last-from", "trim-head-slice", "map-as", "each-from", "none?", "trim-tail", "partition", "if-empty", "accumulate*", "reject!", "find-from", "accumulate-as", "collector-for-as", "reject", "map", "map-sum", "accumulate!", "2each-from", "follow", "supremum-by", "map!", "unless-empty", "collector", "padding", "reduce-index", "replicate-as", "infimum-by", "trim-tail-slice", "count", "find-index", "filter", "accumulate*!", "reject-as", "map-integers", "map-find", "reduce", "selector", "interleave", "2map", "filter-as", "binary-reduce", "map-index-as", "find", "produce", "filter!", "replicate", "cartesian-map", "cartesian-each", "find-index-from", "map-find-last", "3map-as", "3map", "find-last", "selector-as", "2map-as", "2map-reduce", "accumulate", "each", "each-index", "accumulate*-as", "when-empty", "all?", "collector-as", "push-either", "new-like", "collector-for", "2selector", "push-if", "2all?", "map-reduce", "3each", "any?", "trim-slice", "2reduce", "change-nth", "produce-as", "2each", "trim", "trim-head", "cartesian-find", "map-index", "if-zero", "each-integer", "unless-zero", "(find-integer)", "when-zero", "find-last-integer", "(all-integers?)", "times", "(each-integer)", "find-integer", "all-integers?", "unless-negative", "if-positive", "when-positive", "when-negative", "unless-positive", "if-negative", "case", "2cleave", "cond>quot", "case>quot", "3cleave", "wrong-values", "to-fixed-point", "alist>quot", "cond", "cleave", "call-effect", "recursive-hashcode", "spread", "deep-spread>quot", "2||", "0||", "n||", "0&&", "2&&", "3||", "1||", "1&&", "n&&", "3&&", "smart-unless*", "keep-inputs", "reduce-outputs", "smart-when*", "cleave>array", "smart-with", "smart-apply", "smart-if", "inputs/outputs", "output>sequence-n", "map-outputs", "map-reduce-outputs", "dropping", "output>array", "smart-map-reduce", "smart-2map-reduce", "output>array-n", "nullary", "input<sequence", "append-outputs", "drop-inputs", "inputs", "smart-2reduce", "drop-outputs", "smart-reduce", "preserving", "smart-when", "outputs", "append-outputs-as", "smart-unless", "smart-if*", "sum-outputs", "input<sequence-unsafe", "output>sequence"]), "assign"), e.languages.factor = cc11001100_hook("e.languages.factor", r, "assign");
    }(Prism), Prism.languages.fortran = cc11001100_hook("Prism.languages.fortran", {
      "quoted-number": {
        pattern: cc11001100_hook("pattern", /[BOZ](['"])[A-F0-9]+\1/i, "object-key-init"),
        alias: cc11001100_hook("alias", "number", "object-key-init")
      },
      string: {
        pattern: cc11001100_hook("pattern", /(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/, "object-key-init"),
        inside: {
          comment: {
            pattern: cc11001100_hook("pattern", /(&(?:\r\n?|\n)\s*)!.*/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }
        }
      },
      comment: {
        pattern: cc11001100_hook("pattern", /!.*/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      boolean: cc11001100_hook("boolean", /\.(?:TRUE|FALSE)\.(?:_\w+)?/i, "object-key-init"),
      number: cc11001100_hook("number", /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i, "object-key-init"),
      keyword: cc11001100_hook("keyword", [/\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i, /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i, /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i, /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i], "object-key-init"),
      operator: cc11001100_hook("operator", [/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i, {
        pattern: cc11001100_hook("pattern", /(^|(?!\().)\/(?!\))/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /\(\/|\/\)|[(),;:&]/, "object-key-init")
    }, "assign"), Prism.languages.fsharp = cc11001100_hook("Prism.languages.fsharp", Prism.languages.extend("clike", {
      comment: cc11001100_hook("comment", [{
        pattern: cc11001100_hook("pattern", /(^|[^\\])\(\*[\s\S]*?\*\)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^\\:])\/\/.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      "class-name": {
        pattern: cc11001100_hook("pattern", /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: {
          operator: cc11001100_hook("operator", /->|\*/, "object-key-init"),
          punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
        }
      },
      keyword: cc11001100_hook("keyword", /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/, "object-key-init"),
      number: cc11001100_hook("number", [/\b0x[\da-fA-F]+(?:un|lf|LF)?\b/, /\b0b[01]+(?:y|uy)?\b/, /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i, /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/], "object-key-init"),
      operator: cc11001100_hook("operator", /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("fsharp", "keyword", {
      preprocessor: {
        pattern: cc11001100_hook("pattern", /^[^\r\n\S]*#.*/m, "object-key-init"),
        alias: cc11001100_hook("alias", "property", "object-key-init"),
        inside: {
          directive: {
            pattern: cc11001100_hook("pattern", /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "keyword", "object-key-init")
          }
        }
      }
    }), Prism.languages.insertBefore("fsharp", "punctuation", {
      "computation-expression": {
        pattern: cc11001100_hook("pattern", /[_a-z]\w*(?=\s*\{)/i, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      }
    }), Prism.languages.insertBefore("fsharp", "string", {
      annotation: {
        pattern: cc11001100_hook("pattern", /\[<.+?>\]/, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /^\[<|>\]$/, "object-key-init"),
          "class-name": {
            pattern: cc11001100_hook("pattern", /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          },
          "annotation-content": {
            pattern: cc11001100_hook("pattern", /[\s\S]+/, "object-key-init"),
            inside: cc11001100_hook("inside", Prism.languages.fsharp, "object-key-init")
          }
        }
      }
    }), Prism.languages.glsl = cc11001100_hook("Prism.languages.glsl", Prism.languages.extend("clike", {
      comment: cc11001100_hook("comment", [/\/\*[\s\S]*?\*\//, /\/\/(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/], "object-key-init"),
      number: cc11001100_hook("number", /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("glsl", "comment", {
      preprocessor: {
        pattern: cc11001100_hook("pattern", /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "builtin", "object-key-init")
      }
    }), Prism.languages.go = cc11001100_hook("Prism.languages.go", Prism.languages.extend("clike", {
      keyword: cc11001100_hook("keyword", /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, "object-key-init"),
      builtin: cc11001100_hook("builtin", /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:_|iota|nil|true|false)\b/, "object-key-init"),
      operator: cc11001100_hook("operator", /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, "object-key-init"),
      number: cc11001100_hook("number", /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }
    }), "assign"), delete Prism.languages.go["class-name"], Prism.languages.groovy = cc11001100_hook("Prism.languages.groovy", Prism.languages.extend("clike", {
      string: cc11001100_hook("string", [{
        pattern: cc11001100_hook("pattern", /("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:\$\/\$|[\s\S])*?\/\$/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i, "object-key-init"),
      operator: {
        pattern: cc11001100_hook("pattern", /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      punctuation: cc11001100_hook("punctuation", /\.+|[{}[\];(),.:$]/, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("groovy", "string", {
      shebang: {
        pattern: cc11001100_hook("pattern", /#!.+/, "object-key-init"),
        alias: cc11001100_hook("alias", "comment", "object-key-init")
      }
    }), Prism.languages.insertBefore("groovy", "punctuation", {
      "spock-block": cc11001100_hook("spock-block", /\b(?:setup|given|when|then|and|cleanup|expect|where):/, "object-key-init")
    }), Prism.languages.insertBefore("groovy", "function", {
      annotation: {
        pattern: cc11001100_hook("pattern", /(^|[^.])@\w+/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "punctuation", "object-key-init")
      }
    }), Prism.hooks.add("wrap", function (e) {
      if ("groovy" === e.language && "string" === e.type) {
        var t = cc11001100_hook("t", e.content[0], "var-init");
        if ("'" != t) {
          var n = cc11001100_hook("n", /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/, "var-init");
          "$" === t && (n = cc11001100_hook("n", /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/, "assign")), e.content = cc11001100_hook("e.content", e.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&"), "assign"), e.content = cc11001100_hook("e.content", Prism.highlight(e.content, {
            expression: {
              pattern: cc11001100_hook("pattern", n, "object-key-init"),
              lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
              inside: cc11001100_hook("inside", Prism.languages.groovy, "object-key-init")
            }
          }), "assign"), e.classes.push("/" === t ? "regex" : "gstring");
        }
      }
    }), function (e) {
      e.languages.haml = cc11001100_hook("e.languages.haml", {
        "multiline-comment": {
          pattern: cc11001100_hook("pattern", /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "comment", "object-key-init")
        },
        "multiline-code": cc11001100_hook("multiline-code", [{
          pattern: cc11001100_hook("pattern", /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", e.languages.ruby, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", e.languages.ruby, "object-key-init")
        }], "object-key-init"),
        filter: {
          pattern: cc11001100_hook("pattern", /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            "filter-name": {
              pattern: cc11001100_hook("pattern", /^:[\w-]+/, "object-key-init"),
              alias: cc11001100_hook("alias", "variable", "object-key-init")
            }
          }
        },
        markup: {
          pattern: cc11001100_hook("pattern", /((?:^|\r?\n|\r)[\t ]*)<.+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", e.languages.markup, "object-key-init")
        },
        doctype: {
          pattern: cc11001100_hook("pattern", /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        tag: {
          pattern: cc11001100_hook("pattern", /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            attributes: cc11001100_hook("attributes", [{
              pattern: cc11001100_hook("pattern", /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/, "object-key-init"),
              lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
              inside: cc11001100_hook("inside", e.languages.ruby, "object-key-init")
            }, {
              pattern: cc11001100_hook("pattern", /\([^)]+\)/, "object-key-init"),
              inside: {
                "attr-value": {
                  pattern: cc11001100_hook("pattern", /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/, "object-key-init"),
                  lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
                },
                "attr-name": cc11001100_hook("attr-name", /[\w:-]+(?=\s*!?=|\s*[,)])/, "object-key-init"),
                punctuation: cc11001100_hook("punctuation", /[=(),]/, "object-key-init")
              }
            }, {
              pattern: cc11001100_hook("pattern", /\[[^\]]+\]/, "object-key-init"),
              inside: cc11001100_hook("inside", e.languages.ruby, "object-key-init")
            }], "object-key-init"),
            punctuation: cc11001100_hook("punctuation", /[<>]/, "object-key-init")
          }
        },
        code: {
          pattern: cc11001100_hook("pattern", /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", e.languages.ruby, "object-key-init")
        },
        interpolation: {
          pattern: cc11001100_hook("pattern", /#\{[^}]+\}/, "object-key-init"),
          inside: {
            delimiter: {
              pattern: cc11001100_hook("pattern", /^#\{|\}$/, "object-key-init"),
              alias: cc11001100_hook("alias", "punctuation", "object-key-init")
            },
            rest: cc11001100_hook("rest", e.languages.ruby, "object-key-init")
          }
        },
        punctuation: {
          pattern: cc11001100_hook("pattern", /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }
      }, "assign");
      for (var t = cc11001100_hook("t", ["css", {
          filter: cc11001100_hook("filter", "coffee", "object-key-init"),
          language: cc11001100_hook("language", "coffeescript", "object-key-init")
        }, "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"], "var-init"), n = cc11001100_hook("n", {}, "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", t.length, "var-init"); r < i; r++) {
        var a = cc11001100_hook("a", t[r], "var-init");
        a = cc11001100_hook("a", "string" == typeof a ? {
          filter: cc11001100_hook("filter", a, "object-key-init"),
          language: cc11001100_hook("language", a, "object-key-init")
        } : a, "assign"), e.languages[a.language] && (n["filter-" + a.filter] = cc11001100_hook("n[\"filter-\" + a.filter]", {
          pattern: cc11001100_hook("pattern", RegExp("((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+".replace("{{filter_name}}", function () {
            return a.filter;
          })), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            "filter-name": {
              pattern: cc11001100_hook("pattern", /^:[\w-]+/, "object-key-init"),
              alias: cc11001100_hook("alias", "variable", "object-key-init")
            },
            rest: cc11001100_hook("rest", e.languages[a.language], "object-key-init")
          }
        }, "assign"));
      }
      e.languages.insertBefore("haml", "filter", n);
    }(Prism), function (e) {
      e.languages.handlebars = cc11001100_hook("e.languages.handlebars", {
        comment: cc11001100_hook("comment", /\{\{![\s\S]*?\}\}/, "object-key-init"),
        delimiter: {
          pattern: cc11001100_hook("pattern", /^\{\{\{?|\}\}\}?$/i, "object-key-init"),
          alias: cc11001100_hook("alias", "punctuation", "object-key-init")
        },
        string: cc11001100_hook("string", /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        number: cc11001100_hook("number", /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/, "object-key-init"),
        boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init"),
        block: {
          pattern: cc11001100_hook("pattern", /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "keyword", "object-key-init")
        },
        brackets: {
          pattern: cc11001100_hook("pattern", /\[[^\]]+\]/, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /\[|\]/, "object-key-init"),
            variable: cc11001100_hook("variable", /[\s\S]+/, "object-key-init")
          }
        },
        punctuation: cc11001100_hook("punctuation", /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/, "object-key-init"),
        variable: cc11001100_hook("variable", /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/, "object-key-init")
      }, "assign"), e.hooks.add("before-tokenize", function (t) {
        e.languages["markup-templating"].buildPlaceholders(t, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g);
      }), e.hooks.add("after-tokenize", function (t) {
        e.languages["markup-templating"].tokenizePlaceholders(t, "handlebars");
      });
    }(Prism), Prism.languages.haskell = cc11001100_hook("Prism.languages.haskell", {
      comment: {
        pattern: cc11001100_hook("pattern", /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      char: cc11001100_hook("char", /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /"(?:[^\\"]|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      keyword: cc11001100_hook("keyword", /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/, "object-key-init"),
      import_statement: {
        pattern: cc11001100_hook("pattern", /((?:\r?\n|\r|^)\s*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: {
          keyword: cc11001100_hook("keyword", /\b(?:import|qualified|as|hiding)\b/, "object-key-init")
        }
      },
      builtin: cc11001100_hook("builtin", /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/, "object-key-init"),
      hvariable: cc11001100_hook("hvariable", /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/, "object-key-init"),
      constant: cc11001100_hook("constant", /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\];(),.:]/, "object-key-init")
    }, "assign"), Prism.languages.hs = cc11001100_hook("Prism.languages.hs", Prism.languages.haskell, "assign"), function (e) {
      e.languages.http = cc11001100_hook("e.languages.http", {
        "request-line": {
          pattern: cc11001100_hook("pattern", /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m, "object-key-init"),
          inside: {
            property: cc11001100_hook("property", /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/, "object-key-init"),
            "attr-name": cc11001100_hook("attr-name", /:\w+/, "object-key-init")
          }
        },
        "response-status": {
          pattern: cc11001100_hook("pattern", /^HTTP\/1.[01] \d+.*/m, "object-key-init"),
          inside: {
            property: {
              pattern: cc11001100_hook("pattern", /(^HTTP\/1.[01] )\d+.*/i, "object-key-init"),
              lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
            }
          }
        },
        "header-name": {
          pattern: cc11001100_hook("pattern", /^[\w-]+:(?=.)/m, "object-key-init"),
          alias: cc11001100_hook("alias", "keyword", "object-key-init")
        }
      }, "assign");
      var t,
        n = cc11001100_hook("n", e.languages, "var-init"),
        r = cc11001100_hook("r", {
          "application/javascript": cc11001100_hook("application/javascript", n.javascript, "object-key-init"),
          "application/json": cc11001100_hook("application/json", n.json || n.javascript, "object-key-init"),
          "application/xml": cc11001100_hook("application/xml", n.xml, "object-key-init"),
          "text/xml": cc11001100_hook("text/xml", n.xml, "object-key-init"),
          "text/html": cc11001100_hook("text/html", n.html, "object-key-init"),
          "text/css": cc11001100_hook("text/css", n.css, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          "application/json": cc11001100_hook("application/json", !0, "object-key-init"),
          "application/xml": cc11001100_hook("application/xml", !0, "object-key-init")
        }, "var-init");
      function a(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", e.replace(/^[a-z]+\//, ""), "var-init");
        return "(?:" + e + "|" + ("\\w+/(?:[\\w.-]+\\+)+" + t + "(?![+\\w.-])") + ")";
      }
      for (var s in r) if (r[s]) {
        t = cc11001100_hook("t", t || {}, "assign");
        var o = cc11001100_hook("o", i[s] ? a(s) : s, "var-init");
        t[s.replace(/\//g, "-")] = cc11001100_hook("t[s.replace(/\\//g, \"-\")]", {
          pattern: cc11001100_hook("pattern", RegExp("(content-type:\\s*" + o + "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: cc11001100_hook("inside", r[s], "object-key-init")
        }, "assign");
      }
      t && e.languages.insertBefore("http", "header-name", t);
    }(Prism), Prism.languages.inform7 = cc11001100_hook("Prism.languages.inform7", {
      string: {
        pattern: cc11001100_hook("pattern", /"[^"]*"/, "object-key-init"),
        inside: {
          substitution: {
            pattern: cc11001100_hook("pattern", /\[[^\]]+\]/, "object-key-init"),
            inside: {
              delimiter: {
                pattern: cc11001100_hook("pattern", /\[|\]/, "object-key-init"),
                alias: cc11001100_hook("alias", "punctuation", "object-key-init")
              }
            }
          }
        }
      },
      comment: {
        pattern: cc11001100_hook("pattern", /\[[^\]]+\]/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      title: {
        pattern: cc11001100_hook("pattern", /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im, "object-key-init"),
        alias: cc11001100_hook("alias", "important", "object-key-init")
      },
      number: {
        pattern: cc11001100_hook("pattern", /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      verb: {
        pattern: cc11001100_hook("pattern", /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "operator", "object-key-init")
      },
      keyword: {
        pattern: cc11001100_hook("pattern", /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      property: {
        pattern: cc11001100_hook("pattern", /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "symbol", "object-key-init")
      },
      position: {
        pattern: cc11001100_hook("pattern", /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      },
      type: {
        pattern: cc11001100_hook("pattern", /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      },
      punctuation: cc11001100_hook("punctuation", /[.,:;(){}]/, "object-key-init")
    }, "assign"), Prism.languages.inform7.string.inside.substitution.inside.rest = cc11001100_hook("Prism.languages.inform7.string.inside.substitution.inside.rest", Prism.languages.inform7, "assign"), Prism.languages.inform7.string.inside.substitution.inside.rest.text = cc11001100_hook("Prism.languages.inform7.string.inside.substitution.inside.rest.text", {
      pattern: cc11001100_hook("pattern", /\S(?:\s*\S)*/, "object-key-init"),
      alias: cc11001100_hook("alias", "comment", "object-key-init")
    }, "assign"), Prism.languages.ini = cc11001100_hook("Prism.languages.ini", {
      comment: cc11001100_hook("comment", /^[ \t]*[;#].*$/m, "object-key-init"),
      selector: cc11001100_hook("selector", /^[ \t]*\[.*?\]/m, "object-key-init"),
      constant: cc11001100_hook("constant", /^[ \t]*[^\s=]+?(?=[ \t]*=)/m, "object-key-init"),
      "attr-value": {
        pattern: cc11001100_hook("pattern", /=.*/, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /^[=]/, "object-key-init")
        }
      }
    }, "assign"), Prism.languages.io = cc11001100_hook("Prism.languages.io", {
      comment: cc11001100_hook("comment", [{
        pattern: cc11001100_hook("pattern", /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^\\])\/\/.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^\\])#.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      "triple-quoted-string": {
        pattern: cc11001100_hook("pattern", /"""(?:\\[\s\S]|(?!""")[^\\])*"""/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init")
      },
      string: {
        pattern: cc11001100_hook("pattern", /"(?:\\.|[^\\\r\n"])*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      keyword: cc11001100_hook("keyword", /\b(?:activate|activeCoroCount|asString|block|break|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getSlot|getEnvironmentVariable|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|call|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/, "object-key-init"),
      builtin: cc11001100_hook("builtin", /\b(?:Array|AudioDevice|AudioMixer|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Regex|SGML|SGMLElement|SGMLParser|SQLite|Server|Sequence|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink|Random|BigNum|Sequence)\b/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:true|false|nil)\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?/i, "object-key-init"),
      operator: cc11001100_hook("operator", /[=!*/%+-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|\b(?:return|and|or|not)\b|@@?|\?\??|\.\./, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\];(),.:]/, "object-key-init")
    }, "assign"), Prism.languages.j = cc11001100_hook("Prism.languages.j", {
      comment: cc11001100_hook("comment", /\bNB\..*/, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /'(?:''|[^'\r\n])*'/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      keyword: cc11001100_hook("keyword", /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/, "object-key-init"),
      verb: {
        pattern: cc11001100_hook("pattern", /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      },
      number: cc11001100_hook("number", /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/, "object-key-init"),
      adverb: {
        pattern: cc11001100_hook("pattern", /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/, "object-key-init"),
        alias: cc11001100_hook("alias", "builtin", "object-key-init")
      },
      operator: cc11001100_hook("operator", /[=a][.:]|_\./, "object-key-init"),
      conjunction: {
        pattern: cc11001100_hook("pattern", /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      },
      punctuation: cc11001100_hook("punctuation", /[()]/, "object-key-init")
    }, "assign"), function (e) {
      var t = cc11001100_hook("t", /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|null|open|opens|package|private|protected|provides|public|record|requires|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, "var-init"),
        n = cc11001100_hook("n", /\b[A-Z](?:\w*[a-z]\w*)?\b/, "var-init");
      e.languages.java = cc11001100_hook("e.languages.java", e.languages.extend("clike", {
        "class-name": cc11001100_hook("class-name", [n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/], "object-key-init"),
        keyword: cc11001100_hook("keyword", t, "object-key-init"),
        function: cc11001100_hook("function", [e.languages.clike.function, {
          pattern: cc11001100_hook("pattern", /(\:\:)[a-z_]\w*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }], "object-key-init"),
        number: cc11001100_hook("number", /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i, "object-key-init"),
        operator: {
          pattern: cc11001100_hook("pattern", /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }
      }), "assign"), e.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
          pattern: cc11001100_hook("pattern", /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init")
        }
      }), e.languages.insertBefore("java", "class-name", {
        annotation: {
          alias: cc11001100_hook("alias", "punctuation", "object-key-init"),
          pattern: cc11001100_hook("pattern", /(^|[^.])@\w+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        namespace: {
          pattern: cc11001100_hook("pattern", /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(?:\.[a-z]\w*)+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
          }
        },
        generics: {
          pattern: cc11001100_hook("pattern", /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/, "object-key-init"),
          inside: {
            "class-name": cc11001100_hook("class-name", n, "object-key-init"),
            keyword: cc11001100_hook("keyword", t, "object-key-init"),
            punctuation: cc11001100_hook("punctuation", /[<>(),.:]/, "object-key-init"),
            operator: cc11001100_hook("operator", /[?&|]/, "object-key-init")
          }
        }
      });
    }(Prism), Prism.languages.json = cc11001100_hook("Prism.languages.json", {
      property: {
        pattern: cc11001100_hook("pattern", /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      string: {
        pattern: cc11001100_hook("pattern", /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      comment: cc11001100_hook("comment", /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, "object-key-init"),
      number: cc11001100_hook("number", /-?\d+\.?\d*(?:e[+-]?\d+)?/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\],]/, "object-key-init"),
      operator: cc11001100_hook("operator", /:/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init"),
      null: {
        pattern: cc11001100_hook("pattern", /\bnull\b/, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      }
    }, "assign"), Prism.languages.julia = cc11001100_hook("Prism.languages.julia", {
      comment: {
        pattern: cc11001100_hook("pattern", /(^|[^\\])#.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      string: cc11001100_hook("string", /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2/, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init"),
      number: cc11001100_hook("number", /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?/i, "object-key-init"),
      operator: cc11001100_hook("operator", /[-+*^%÷&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥]/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\];(),.:]/, "object-key-init"),
      constant: cc11001100_hook("constant", /\b(?:(?:NaN|Inf)(?:16|32|64)?)\b/, "object-key-init")
    }, "assign"), function (e) {
      e.languages.kotlin = cc11001100_hook("e.languages.kotlin", e.languages.extend("clike", {
        keyword: {
          pattern: cc11001100_hook("pattern", /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        function: cc11001100_hook("function", [/\w+(?=\s*\()/, {
          pattern: cc11001100_hook("pattern", /(\.)\w+(?=\s*\{)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }], "object-key-init"),
        number: cc11001100_hook("number", /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, "object-key-init"),
        operator: cc11001100_hook("operator", /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/, "object-key-init")
      }), "assign"), delete e.languages.kotlin["class-name"], e.languages.insertBefore("kotlin", "string", {
        "raw-string": {
          pattern: cc11001100_hook("pattern", /("""|''')[\s\S]*?\1/, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init")
        }
      }), e.languages.insertBefore("kotlin", "keyword", {
        annotation: {
          pattern: cc11001100_hook("pattern", /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, "object-key-init"),
          alias: cc11001100_hook("alias", "builtin", "object-key-init")
        }
      }), e.languages.insertBefore("kotlin", "function", {
        label: {
          pattern: cc11001100_hook("pattern", /\w+@|@\w+/, "object-key-init"),
          alias: cc11001100_hook("alias", "symbol", "object-key-init")
        }
      });
      var t = cc11001100_hook("t", [{
        pattern: cc11001100_hook("pattern", /\$\{[^}]+\}/, "object-key-init"),
        inside: {
          delimiter: {
            pattern: cc11001100_hook("pattern", /^\$\{|\}$/, "object-key-init"),
            alias: cc11001100_hook("alias", "variable", "object-key-init")
          },
          rest: cc11001100_hook("rest", e.languages.kotlin, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /\$\w+/, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      }], "var-init");
      e.languages.kotlin.string.inside = cc11001100_hook("e.languages.kotlin.string.inside", e.languages.kotlin["raw-string"].inside = cc11001100_hook("e.languages.kotlin[\"raw-string\"].inside", {
        interpolation: cc11001100_hook("interpolation", t, "object-key-init")
      }, "assign"), "assign");
    }(Prism), Prism.languages.less = cc11001100_hook("Prism.languages.less", Prism.languages.extend("css", {
      comment: cc11001100_hook("comment", [/\/\*[\s\S]*?\*\//, {
        pattern: cc11001100_hook("pattern", /(^|[^\\])\/\/.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      atrule: {
        pattern: cc11001100_hook("pattern", /@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /[:()]/, "object-key-init")
        }
      },
      selector: {
        pattern: cc11001100_hook("pattern", /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/, "object-key-init"),
        inside: {
          variable: cc11001100_hook("variable", /@+[\w-]+/, "object-key-init")
        }
      },
      property: cc11001100_hook("property", /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i, "object-key-init"),
      operator: cc11001100_hook("operator", /[+\-*\/]/, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("less", "property", {
      variable: cc11001100_hook("variable", [{
        pattern: cc11001100_hook("pattern", /@[\w-]+\s*:/, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /:/, "object-key-init")
        }
      }, /@@?[\w-]+/], "object-key-init"),
      "mixin-usage": {
        pattern: cc11001100_hook("pattern", /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "function", "object-key-init")
      }
    }), Prism.languages.liquid = cc11001100_hook("Prism.languages.liquid", {
      keyword: cc11001100_hook("keyword", /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i, "object-key-init"),
      operator: {
        pattern: cc11001100_hook("pattern", /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      function: {
        pattern: cc11001100_hook("pattern", /(^|[\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\s;|&])/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }
    }, "assign"), function (e) {
      e.languages.llvm = cc11001100_hook("e.languages.llvm", {
        comment: cc11001100_hook("comment", /;.*/, "object-key-init"),
        string: {
          pattern: cc11001100_hook("pattern", /"[^"]*"/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        },
        boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init"),
        variable: cc11001100_hook("variable", /[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i, "object-key-init"),
        label: cc11001100_hook("label", /(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i, "object-key-init"),
        type: {
          pattern: cc11001100_hook("pattern", /\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/, "object-key-init"),
          alias: cc11001100_hook("alias", "class-name", "object-key-init")
        },
        keyword: cc11001100_hook("keyword", /\b[a-z_][a-z_0-9]*\b/, "object-key-init"),
        number: cc11001100_hook("number", /[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/, "object-key-init"),
        punctuation: cc11001100_hook("punctuation", /[{}[\];(),.!*=<>]/, "object-key-init")
      }, "assign");
    }(Prism), Prism.languages.lua = cc11001100_hook("Prism.languages.lua", {
      comment: cc11001100_hook("comment", /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      number: cc11001100_hook("number", /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/, "object-key-init"),
      function: cc11001100_hook("function", /(?!\d)\w+(?=\s*(?:[({]))/, "object-key-init"),
      operator: cc11001100_hook("operator", [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, {
        pattern: cc11001100_hook("pattern", /(^|[^.])\.\.(?!\.)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[\[\](){},;]|\.+|:+/, "object-key-init")
    }, "assign"), Prism.languages.matlab = cc11001100_hook("Prism.languages.matlab", {
      comment: cc11001100_hook("comment", [/%\{[\s\S]*?\}%/, /%.+/], "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /\B'(?:''|[^'\r\n])*'/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      number: cc11001100_hook("number", /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/, "object-key-init"),
      function: cc11001100_hook("function", /(?!\d)\w+(?=\s*\()/, "object-key-init"),
      operator: cc11001100_hook("operator", /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /\.{3}|[.,;\[\](){}!]/, "object-key-init")
    }, "assign"), Prism.languages.monkey = cc11001100_hook("Prism.languages.monkey", {
      string: cc11001100_hook("string", /"[^"\r\n]*"/, "object-key-init"),
      comment: cc11001100_hook("comment", [{
        pattern: cc11001100_hook("pattern", /^#Rem\s+[\s\S]*?^#End/im, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /'.+/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      preprocessor: {
        pattern: cc11001100_hook("pattern", /(^[ \t]*)#.+/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "comment", "object-key-init")
      },
      function: cc11001100_hook("function", /\w+(?=\()/, "object-key-init"),
      "type-char": {
        pattern: cc11001100_hook("pattern", /(\w)[?%#$]/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      },
      number: {
        pattern: cc11001100_hook("pattern", /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      keyword: cc11001100_hook("keyword", /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[.,:;()\[\]]/, "object-key-init")
    }, "assign"), Prism.languages.nasm = cc11001100_hook("Prism.languages.nasm", {
      comment: cc11001100_hook("comment", /;.*$/m, "object-key-init"),
      string: cc11001100_hook("string", /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
      label: {
        pattern: cc11001100_hook("pattern", /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "function", "object-key-init")
      },
      keyword: cc11001100_hook("keyword", [/\[?BITS (?:16|32|64)\]?/, {
        pattern: cc11001100_hook("pattern", /(^\s*)section\s*[a-zA-Z.]+:?/im, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, /(?:extern|global)[^;\r\n]*/i, /(?:CPU|FLOAT|DEFAULT).*$/m], "object-key-init"),
      register: {
        pattern: cc11001100_hook("pattern", /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      },
      number: cc11001100_hook("number", /(?:\b|(?=\$))(?:0[hx][\da-f]*\.?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(?:\.?e[+-]?\d+)?[dt]?)\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", /[\[\]*+\-\/%<>=&|$!]/, "object-key-init")
    }, "assign"), Prism.languages.nginx = cc11001100_hook("Prism.languages.nginx", Prism.languages.extend("clike", {
      comment: {
        pattern: cc11001100_hook("pattern", /(^|[^"{\\])#.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      keyword: cc11001100_hook("keyword", /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|events|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types|ssl_session_tickets|ssl_stapling|ssl_stapling_verify|ssl_ecdh_curve|ssl_trusted_certificate|more_set_headers|ssl_early_data)\b/i, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("nginx", "keyword", {
      variable: cc11001100_hook("variable", /\$[a-z_]+/i, "object-key-init")
    }), Prism.languages.nsis = cc11001100_hook("Prism.languages.nsis", {
      comment: {
        pattern: cc11001100_hook("pattern", /(^|[^\\])(?:\/\*[\s\S]*?\*\/|[#;].*)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      string: {
        pattern: cc11001100_hook("pattern", /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      keyword: {
        pattern: cc11001100_hook("pattern", /(^\s*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(?:Font|Gradient|Image)|BrandingText|BringToFront|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DlgItem|DLLVersion(?:Local)?|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|InstProgressFlags|Inst(?:Type(?:GetText|SetText)?)|Int(?:64|Ptr)?CmpU?|Int(?:64)?Fmt|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(?:Dialogs|Exec)|NSISdl|OutFile|Page(?:Callbacks)?|PE(?:DllCharacteristics|SubsysVer)|Pop|Push|Quit|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle)\b/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      property: cc11001100_hook("property", /\b(?:admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(?:ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK(?:(?:CR|CU|LM)(?:32|64)?|DD|PD|U)|HKEY_(?:CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(?:ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(?:ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/, "object-key-init"),
      constant: cc11001100_hook("constant", /\${[\w\.:\^-]+}|\$\([\w\.:\^-]+\)/i, "object-key-init"),
      variable: cc11001100_hook("variable", /\$\w+/i, "object-key-init"),
      number: cc11001100_hook("number", /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/, "object-key-init"),
      operator: cc11001100_hook("operator", /--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\];(),.:]/, "object-key-init"),
      important: {
        pattern: cc11001100_hook("pattern", /(^\s*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }
    }, "assign"), Prism.languages.ocaml = cc11001100_hook("Prism.languages.ocaml", {
      comment: cc11001100_hook("comment", /\(\*[\s\S]*?\*\)/, "object-key-init"),
      string: cc11001100_hook("string", [{
        pattern: cc11001100_hook("pattern", /"(?:\\.|[^\\\r\n"])*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      number: cc11001100_hook("number", /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i, "object-key-init"),
      directive: {
        pattern: cc11001100_hook("pattern", /\B#\w+/, "object-key-init"),
        alias: cc11001100_hook("alias", "important", "object-key-init")
      },
      label: {
        pattern: cc11001100_hook("pattern", /\B~\w+/, "object-key-init"),
        alias: cc11001100_hook("alias", "function", "object-key-init")
      },
      type_variable: {
        pattern: cc11001100_hook("pattern", /\B'\w+/, "object-key-init"),
        alias: cc11001100_hook("alias", "function", "object-key-init")
      },
      variant: {
        pattern: cc11001100_hook("pattern", /`\w+/, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      },
      module: {
        pattern: cc11001100_hook("pattern", /\b[A-Z]\w+/, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init")
      },
      keyword: cc11001100_hook("keyword", /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:false|true)\b/, "object-key-init"),
      operator: cc11001100_hook("operator", /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[(){}\[\]|_.,:;]/, "object-key-init")
    }, "assign"), Prism.languages.perl = cc11001100_hook("Prism.languages.perl", {
      comment: cc11001100_hook("comment", [{
        pattern: cc11001100_hook("pattern", /(^\s*)=\w+[\s\S]*?=cut.*/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^\\$])#.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      string: cc11001100_hook("string", [{
        pattern: cc11001100_hook("pattern", /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /'(?:[^'\\\r\n]|\\.)*'/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      regex: cc11001100_hook("regex", [{
        pattern: cc11001100_hook("pattern", /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      variable: cc11001100_hook("variable", [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/], "object-key-init"),
      filehandle: {
        pattern: cc11001100_hook("pattern", /<(?![<=])\S*>|\b_\b/, "object-key-init"),
        alias: cc11001100_hook("alias", "symbol", "object-key-init")
      },
      vstring: {
        pattern: cc11001100_hook("pattern", /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init")
      },
      function: {
        pattern: cc11001100_hook("pattern", /sub [a-z0-9_]+/i, "object-key-init"),
        inside: {
          keyword: cc11001100_hook("keyword", /sub/, "object-key-init")
        }
      },
      keyword: cc11001100_hook("keyword", /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/, "object-key-init"),
      operator: cc11001100_hook("operator", /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\];(),:]/, "object-key-init")
    }, "assign"), function (e) {
      e.languages.php = cc11001100_hook("e.languages.php", e.languages.extend("clike", {
        keyword: cc11001100_hook("keyword", /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i, "object-key-init"),
        boolean: {
          pattern: cc11001100_hook("pattern", /\b(?:false|true)\b/i, "object-key-init"),
          alias: cc11001100_hook("alias", "constant", "object-key-init")
        },
        constant: cc11001100_hook("constant", [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i], "object-key-init"),
        comment: {
          pattern: cc11001100_hook("pattern", /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }
      }), "assign"), e.languages.insertBefore("php", "string", {
        "shell-comment": {
          pattern: cc11001100_hook("pattern", /(^|[^\\])#.*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "comment", "object-key-init")
        }
      }), e.languages.insertBefore("php", "comment", {
        delimiter: {
          pattern: cc11001100_hook("pattern", /\?>$|^<\?(?:php(?=\s)|=)?/i, "object-key-init"),
          alias: cc11001100_hook("alias", "important", "object-key-init")
        }
      }), e.languages.insertBefore("php", "keyword", {
        variable: cc11001100_hook("variable", /\$+(?:\w+\b|(?={))/i, "object-key-init"),
        package: {
          pattern: cc11001100_hook("pattern", /(\\|namespace\s+|use\s+)[\w\\]+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /\\/, "object-key-init")
          }
        }
      }), e.languages.insertBefore("php", "operator", {
        property: {
          pattern: cc11001100_hook("pattern", /(->)[\w]+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }
      });
      var t = cc11001100_hook("t", {
        pattern: cc11001100_hook("pattern", /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: cc11001100_hook("inside", e.languages.php, "object-key-init")
      }, "var-init");
      e.languages.insertBefore("php", "string", {
        "nowdoc-string": {
          pattern: cc11001100_hook("pattern", /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init"),
          inside: {
            delimiter: {
              pattern: cc11001100_hook("pattern", /^<<<'[^']+'|[a-z_]\w*;$/i, "object-key-init"),
              alias: cc11001100_hook("alias", "symbol", "object-key-init"),
              inside: {
                punctuation: cc11001100_hook("punctuation", /^<<<'?|[';]$/, "object-key-init")
              }
            }
          }
        },
        "heredoc-string": {
          pattern: cc11001100_hook("pattern", /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init"),
          inside: {
            delimiter: {
              pattern: cc11001100_hook("pattern", /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, "object-key-init"),
              alias: cc11001100_hook("alias", "symbol", "object-key-init"),
              inside: {
                punctuation: cc11001100_hook("punctuation", /^<<<"?|[";]$/, "object-key-init")
              }
            },
            interpolation: cc11001100_hook("interpolation", t, "object-key-init")
          }
        },
        "single-quoted-string": {
          pattern: cc11001100_hook("pattern", /'(?:\\[\s\S]|[^\\'])*'/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init")
        },
        "double-quoted-string": {
          pattern: cc11001100_hook("pattern", /"(?:\\[\s\S]|[^\\"])*"/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init"),
          inside: {
            interpolation: cc11001100_hook("interpolation", t, "object-key-init")
          }
        }
      }), delete e.languages.php.string, e.hooks.add("before-tokenize", function (t) {
        if (/<\?/.test(t.code)) {
          e.languages["markup-templating"].buildPlaceholders(t, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi);
        }
      }), e.hooks.add("after-tokenize", function (t) {
        e.languages["markup-templating"].tokenizePlaceholders(t, "php");
      });
    }(Prism), function (e) {
      var t = cc11001100_hook("t", e.languages.powershell = cc11001100_hook("e.languages.powershell", {
          comment: cc11001100_hook("comment", [{
            pattern: cc11001100_hook("pattern", /(^|[^`])<#[\s\S]*?#>/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }, {
            pattern: cc11001100_hook("pattern", /(^|[^`])#.*/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }], "object-key-init"),
          string: cc11001100_hook("string", [{
            pattern: cc11001100_hook("pattern", /"(?:`[\s\S]|[^`"])*"/, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init"),
            inside: {
              function: {
                pattern: cc11001100_hook("pattern", /(^|[^`])\$\((?:\$\(.*?\)|(?!\$\()[^\r\n)])*\)/, "object-key-init"),
                lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
                inside: {}
              }
            }
          }, {
            pattern: cc11001100_hook("pattern", /'(?:[^']|'')*'/, "object-key-init"),
            greedy: cc11001100_hook("greedy", !0, "object-key-init")
          }], "object-key-init"),
          namespace: cc11001100_hook("namespace", /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i, "object-key-init"),
          boolean: cc11001100_hook("boolean", /\$(?:true|false)\b/i, "object-key-init"),
          variable: cc11001100_hook("variable", /\$\w+\b/i, "object-key-init"),
          function: cc11001100_hook("function", [/\b(?:Add-(?:Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(?:Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(?:Csv|Json|StringData)|Convert-Path|ConvertTo-(?:Csv|Html|Json|Xml)|Copy-(?:Item|ItemProperty)|Debug-Process|Disable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(?:Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(?:Custom|List|Table|Wide)|Get-(?:Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(?:Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(?:Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(?:Command|Object)|Move-(?:Item|ItemProperty)|New-(?:Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(?:Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(?:Job|PSSession)|Register-(?:EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(?:Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(?:Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(?:Computer|Service)|Restore-Computer|Resume-(?:Job|Service)|Save-Help|Select-(?:Object|String|Xml)|Send-MailMessage|Set-(?:Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(?:Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(?:Job|Process|Service|Sleep|Transaction)|Stop-(?:Computer|Job|Process|Service)|Suspend-(?:Job|Service)|Tee-Object|Test-(?:ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(?:Event|PSSessionConfiguration)|Update-(?:FormatData|Help|List|TypeData)|Use-Transaction|Wait-(?:Event|Job|Process)|Where-Object|Write-(?:Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i], "object-key-init"),
          keyword: cc11001100_hook("keyword", /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i, "object-key-init"),
          operator: {
            pattern: cc11001100_hook("pattern", /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          },
          punctuation: cc11001100_hook("punctuation", /[|{}[\];(),.]/, "object-key-init")
        }, "assign"), "var-init"),
        n = cc11001100_hook("n", t.string[0].inside, "var-init");
      n.boolean = cc11001100_hook("n.boolean", t.boolean, "assign"), n.variable = cc11001100_hook("n.variable", t.variable, "assign"), n.function.inside = cc11001100_hook("n.function.inside", t, "assign");
    }(Prism), Prism.languages.prolog = cc11001100_hook("Prism.languages.prolog", {
      comment: cc11001100_hook("comment", [/%.+/, /\/\*[\s\S]*?\*\//], "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      builtin: cc11001100_hook("builtin", /\b(?:fx|fy|xf[xy]?|yfx?)\b/, "object-key-init"),
      variable: cc11001100_hook("variable", /\b[A-Z_]\w*/, "object-key-init"),
      function: cc11001100_hook("function", /\b[a-z]\w*(?:(?=\()|\/\d+)/, "object-key-init"),
      number: cc11001100_hook("number", /\b\d+\.?\d*/, "object-key-init"),
      operator: cc11001100_hook("operator", /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[(){}\[\],]/, "object-key-init")
    }, "assign"), Prism.languages.properties = cc11001100_hook("Prism.languages.properties", {
      comment: cc11001100_hook("comment", /^[ \t]*[#!].*$/m, "object-key-init"),
      "attr-value": {
        pattern: cc11001100_hook("pattern", /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      "attr-name": cc11001100_hook("attr-name", /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[=:] *| )/m, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[=:]/, "object-key-init")
    }, "assign"), function (e) {
      var t = cc11001100_hook("t", /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/, "var-init");
      e.languages.protobuf = cc11001100_hook("e.languages.protobuf", e.languages.extend("clike", {
        "class-name": {
          pattern: cc11001100_hook("pattern", /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        keyword: cc11001100_hook("keyword", /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/, "object-key-init")
      }), "assign"), e.languages.insertBefore("protobuf", "operator", {
        map: {
          pattern: cc11001100_hook("pattern", /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/, "object-key-init"),
          alias: cc11001100_hook("alias", "class-name", "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /[<>.,]/, "object-key-init"),
            builtin: cc11001100_hook("builtin", t, "object-key-init")
          }
        },
        builtin: cc11001100_hook("builtin", t, "object-key-init"),
        "positional-class-name": {
          pattern: cc11001100_hook("pattern", /(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/, "object-key-init"),
          alias: cc11001100_hook("alias", "class-name", "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
          }
        },
        annotation: {
          pattern: cc11001100_hook("pattern", /(\[\s*)[A-Za-z_]\w*(?=\s*=)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }
      });
    }(Prism), function (e) {
      e.languages.puppet = cc11001100_hook("e.languages.puppet", {
        heredoc: cc11001100_hook("heredoc", [{
          pattern: cc11001100_hook("pattern", /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /(?=\S).*\S(?= *$)/, "object-key-init")
          }
        }, {
          pattern: cc11001100_hook("pattern", /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /(?=\S).*\S(?= *$)/, "object-key-init")
          }
        }, {
          pattern: cc11001100_hook("pattern", /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init"),
          inside: {
            punctuation: {
              pattern: cc11001100_hook("pattern", /(\().+?(?=\))/, "object-key-init"),
              lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
            }
          }
        }], "object-key-init"),
        "multiline-comment": {
          pattern: cc11001100_hook("pattern", /(^|[^\\])\/\*[\s\S]*?\*\//, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "comment", "object-key-init")
        },
        regex: {
          pattern: cc11001100_hook("pattern", /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            "extended-regex": {
              pattern: cc11001100_hook("pattern", /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/, "object-key-init"),
              inside: {
                comment: cc11001100_hook("comment", /#.*/, "object-key-init")
              }
            }
          }
        },
        comment: {
          pattern: cc11001100_hook("pattern", /(^|[^\\])#.*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        },
        string: {
          pattern: cc11001100_hook("pattern", /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            "double-quoted": {
              pattern: cc11001100_hook("pattern", /^"[\s\S]*"$/, "object-key-init"),
              inside: {}
            }
          }
        },
        variable: {
          pattern: cc11001100_hook("pattern", /\$(?:::)?\w+(?:::\w+)*/, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /::/, "object-key-init")
          }
        },
        "attr-name": cc11001100_hook("attr-name", /(?:\w+|\*)(?=\s*=>)/, "object-key-init"),
        function: cc11001100_hook("function", [{
          pattern: cc11001100_hook("pattern", /(\.)(?!\d)\w+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }, /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/], "object-key-init"),
        number: cc11001100_hook("number", /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i, "object-key-init"),
        boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init"),
        keyword: cc11001100_hook("keyword", /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/, "object-key-init"),
        datatype: {
          pattern: cc11001100_hook("pattern", /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/, "object-key-init"),
          alias: cc11001100_hook("alias", "symbol", "object-key-init")
        },
        operator: cc11001100_hook("operator", /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/, "object-key-init"),
        punctuation: cc11001100_hook("punctuation", /[\[\]{}().,;]|:+/, "object-key-init")
      }, "assign");
      var t = cc11001100_hook("t", [{
        pattern: cc11001100_hook("pattern", /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: {
          "short-variable": {
            pattern: cc11001100_hook("pattern", /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "variable", "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", /::/, "object-key-init")
            }
          },
          delimiter: {
            pattern: cc11001100_hook("pattern", /^\$/, "object-key-init"),
            alias: cc11001100_hook("alias", "variable", "object-key-init")
          },
          rest: cc11001100_hook("rest", e.languages.puppet, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "variable", "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /::/, "object-key-init")
        }
      }], "var-init");
      e.languages.puppet.heredoc[0].inside.interpolation = cc11001100_hook("e.languages.puppet.heredoc[0].inside.interpolation", t, "assign"), e.languages.puppet.string.inside["double-quoted"].inside.interpolation = cc11001100_hook("e.languages.puppet.string.inside[\"double-quoted\"].inside.interpolation", t, "assign");
    }(Prism), Prism.languages.python = cc11001100_hook("Prism.languages.python", {
      comment: {
        pattern: cc11001100_hook("pattern", /(^|[^\\])#.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      "string-interpolation": {
        pattern: cc11001100_hook("pattern", /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: {
            pattern: cc11001100_hook("pattern", /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            inside: {
              "format-spec": {
                pattern: cc11001100_hook("pattern", /(:)[^:(){}]+(?=}$)/, "object-key-init"),
                lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
              },
              "conversion-option": {
                pattern: cc11001100_hook("pattern", /![sra](?=[:}]$)/, "object-key-init"),
                alias: cc11001100_hook("alias", "punctuation", "object-key-init")
              },
              rest: cc11001100_hook("rest", null, "object-key-init")
            }
          },
          string: cc11001100_hook("string", /[\s\S]+/, "object-key-init")
        }
      },
      "triple-quoted-string": {
        pattern: cc11001100_hook("pattern", /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init")
      },
      string: {
        pattern: cc11001100_hook("pattern", /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      function: {
        pattern: cc11001100_hook("pattern", /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      "class-name": {
        pattern: cc11001100_hook("pattern", /(\bclass\s+)\w+/i, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      decorator: {
        pattern: cc11001100_hook("pattern", /(^\s*)@\w+(?:\.\w+)*/im, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", ["annotation", "punctuation"], "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
        }
      },
      keyword: cc11001100_hook("keyword", /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, "object-key-init"),
      builtin: cc11001100_hook("builtin", /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:True|False|None)\b/, "object-key-init"),
      number: cc11001100_hook("number", /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\];(),.:]/, "object-key-init")
    }, "assign"), Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = cc11001100_hook("Prism.languages.python[\"string-interpolation\"].inside.interpolation.inside.rest", Prism.languages.python, "assign"), Prism.languages.py = cc11001100_hook("Prism.languages.py", Prism.languages.python, "assign"), function (e) {
      for (var t = cc11001100_hook("t", /"(?:\\.|[^\\"\r\n])*"|'(?:\\.|[^\\'\r\n])*'/.source, "var-init"), n = cc11001100_hook("n", /\/\/.*|\/\*(?:(?!\*\/)[\s\S])*\*\//.source, "var-init"), r = cc11001100_hook("r", /(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/.source.replace(/<string>/g, function () {
          return t;
        }).replace(/<comment>/g, function () {
          return n;
        }), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < 2; i++) r = cc11001100_hook("r", r.replace(/<expr>/g, function () {
        return r;
      }), "assign");
      r = cc11001100_hook("r", r.replace(/<expr>/g, "[^\\s\\S]"), "assign"), e.languages.qml = cc11001100_hook("e.languages.qml", {
        comment: {
          pattern: cc11001100_hook("pattern", /\/\/.*|\/\*[\s\S]*?\*\//, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        },
        "javascript-function": {
          pattern: cc11001100_hook("pattern", RegExp(/((?:^|;)[ \t]*)function\s+[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*\(<js>*\)\s*\{<js>*\}/.source.replace(/<js>/g, function () {
            return r;
          }), "m"), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "language-javascript", "object-key-init"),
          inside: cc11001100_hook("inside", e.languages.javascript, "object-key-init")
        },
        "class-name": {
          pattern: cc11001100_hook("pattern", /((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        property: cc11001100_hook("property", [{
          pattern: cc11001100_hook("pattern", /((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", /((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            keyword: cc11001100_hook("keyword", /^property/, "object-key-init"),
            property: cc11001100_hook("property", /\w+(?:\.\w+)*/, "object-key-init")
          }
        }], "object-key-init"),
        "javascript-expression": {
          pattern: cc11001100_hook("pattern", RegExp(/(:[ \t]*)(?![\s;}[])(?:(?!$|[;}])<js>)+/.source.replace(/<js>/g, function () {
            return r;
          }), "m"), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "language-javascript", "object-key-init"),
          inside: cc11001100_hook("inside", e.languages.javascript, "object-key-init")
        },
        string: cc11001100_hook("string", /"(?:\\.|[^\\"\r\n])*"/, "object-key-init"),
        keyword: cc11001100_hook("keyword", /\b(?:as|import|on)\b/, "object-key-init"),
        punctuation: cc11001100_hook("punctuation", /[{}[\]:;,]/, "object-key-init")
      }, "assign");
    }(Prism), function (e) {
      var t = cc11001100_hook("t", {
          pattern: cc11001100_hook("pattern", /(^[ \t]*| {2}|\t)#.*/m, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        }, "var-init"),
        n = cc11001100_hook("n", {
          pattern: cc11001100_hook("pattern", /((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /^[$@&%]\{|\}$/, "object-key-init")
          }
        }, "var-init");
      function r(e, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var i = cc11001100_hook("i", {
          "section-header": {
            pattern: cc11001100_hook("pattern", /^ ?\*{3}.+?\*{3}/, "object-key-init"),
            alias: cc11001100_hook("alias", "keyword", "object-key-init")
          }
        }, "var-init");
        for (var a in r) i[a] = cc11001100_hook("i[a]", r[a], "assign");
        return i.tag = cc11001100_hook("i.tag", {
          pattern: cc11001100_hook("pattern", /([\r\n](?:  |\t)[ \t]*)\[[-\w]+\]/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /\[|\]/, "object-key-init")
          }
        }, "assign"), i.variable = cc11001100_hook("i.variable", n, "assign"), i.comment = cc11001100_hook("i.comment", t, "assign"), {
          pattern: cc11001100_hook("pattern", RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g, function () {
            return e;
          }), "im"), "object-key-init"),
          alias: cc11001100_hook("alias", "section", "object-key-init"),
          inside: cc11001100_hook("inside", i, "object-key-init")
        };
      }
      var i = cc11001100_hook("i", {
          pattern: cc11001100_hook("pattern", /(\[Documentation\](?:  |\t)[ \t]*)(?![ \t]|#)(?:.|[ \t]*(?:\r\n?|\n)[ \t]*\.{3}[ \t]*)+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          pattern: cc11001100_hook("pattern", /([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "function", "object-key-init"),
          inside: {
            variable: cc11001100_hook("variable", n, "object-key-init")
          }
        }, "var-init"),
        s = cc11001100_hook("s", {
          pattern: cc11001100_hook("pattern", /([\r\n](?:  |\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            variable: cc11001100_hook("variable", n, "object-key-init")
          }
        }, "var-init");
      e.languages.robotframework = cc11001100_hook("e.languages.robotframework", {
        settings: cc11001100_hook("settings", r("Settings", {
          documentation: {
            pattern: cc11001100_hook("pattern", /([\r\n] ?Documentation(?:  |\t)[ \t]*)(?![ \t]|#)(?:.|[ \t]*(?:\r\n?|\n)[ \t]*\.{3}[ \t]*)+/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
            alias: cc11001100_hook("alias", "string", "object-key-init")
          },
          property: {
            pattern: cc11001100_hook("pattern", /([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }
        }), "object-key-init"),
        variables: cc11001100_hook("variables", r("Variables"), "object-key-init"),
        "test-cases": cc11001100_hook("test-cases", r("Test Cases", {
          "test-name": cc11001100_hook("test-name", a, "object-key-init"),
          documentation: cc11001100_hook("documentation", i, "object-key-init"),
          property: cc11001100_hook("property", s, "object-key-init")
        }), "object-key-init"),
        keywords: cc11001100_hook("keywords", r("Keywords", {
          "keyword-name": cc11001100_hook("keyword-name", a, "object-key-init"),
          documentation: cc11001100_hook("documentation", i, "object-key-init"),
          property: cc11001100_hook("property", s, "object-key-init")
        }), "object-key-init"),
        tasks: cc11001100_hook("tasks", r("Tasks", {
          "task-name": cc11001100_hook("task-name", a, "object-key-init"),
          documentation: cc11001100_hook("documentation", i, "object-key-init"),
          property: cc11001100_hook("property", s, "object-key-init")
        }), "object-key-init"),
        comment: cc11001100_hook("comment", t, "object-key-init")
      }, "assign"), e.languages.robot = cc11001100_hook("e.languages.robot", e.languages.robotframework, "assign");
    }(Prism), Prism.languages.rust = cc11001100_hook("Prism.languages.rust", {
      comment: cc11001100_hook("comment", [{
        pattern: cc11001100_hook("pattern", /(^|[^\\])\/\*[\s\S]*?\*\//, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^|[^\\:])\/\/.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      string: cc11001100_hook("string", [{
        pattern: cc11001100_hook("pattern", /b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /b?"(?:\\.|[^\\\r\n"])*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }], "object-key-init"),
      char: {
        pattern: cc11001100_hook("pattern", /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init")
      },
      "lifetime-annotation": {
        pattern: cc11001100_hook("pattern", /'[^\s>']+/, "object-key-init"),
        alias: cc11001100_hook("alias", "symbol", "object-key-init")
      },
      keyword: cc11001100_hook("keyword", /\b(?:abstract|alignof|as|async|await|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, "object-key-init"),
      attribute: {
        pattern: cc11001100_hook("pattern", /#!?\[.+?\]/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "attr-name", "object-key-init")
      },
      function: cc11001100_hook("function", [/\w+(?=\s*\()/, /\w+!(?=\s*\(|\[)/], "object-key-init"),
      "macro-rules": {
        pattern: cc11001100_hook("pattern", /\w+!/, "object-key-init"),
        alias: cc11001100_hook("alias", "function", "object-key-init")
      },
      number: cc11001100_hook("number", /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/, "object-key-init"),
      "closure-params": {
        pattern: cc11001100_hook("pattern", /\|[^|]*\|(?=\s*[{-])/, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /[|:,]/, "object-key-init"),
          operator: cc11001100_hook("operator", /[&*]/, "object-key-init")
        }
      },
      punctuation: cc11001100_hook("punctuation", /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, "object-key-init"),
      operator: cc11001100_hook("operator", /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/, "object-key-init")
    }, "assign"), function (e) {
      e.languages.sass = cc11001100_hook("e.languages.sass", e.languages.extend("css", {
        comment: {
          pattern: cc11001100_hook("pattern", /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }
      }), "assign"), e.languages.insertBefore("sass", "atrule", {
        "atrule-line": {
          pattern: cc11001100_hook("pattern", /^(?:[ \t]*)[@+=].+/m, "object-key-init"),
          inside: {
            atrule: cc11001100_hook("atrule", /(?:@[\w-]+|[+=])/m, "object-key-init")
          }
        }
      }), delete e.languages.sass.atrule;
      var t = cc11001100_hook("t", /\$[-\w]+|#\{\$[-\w]+\}/, "var-init"),
        n = cc11001100_hook("n", [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
          pattern: cc11001100_hook("pattern", /(\s+)-(?=\s)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }], "var-init");
      e.languages.insertBefore("sass", "property", {
        "variable-line": {
          pattern: cc11001100_hook("pattern", /^[ \t]*\$.+/m, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /:/, "object-key-init"),
            variable: cc11001100_hook("variable", t, "object-key-init"),
            operator: cc11001100_hook("operator", n, "object-key-init")
          }
        },
        "property-line": {
          pattern: cc11001100_hook("pattern", /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m, "object-key-init"),
          inside: {
            property: cc11001100_hook("property", [/[^:\s]+(?=\s*:)/, {
              pattern: cc11001100_hook("pattern", /(:)[^:\s]+/, "object-key-init"),
              lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
            }], "object-key-init"),
            punctuation: cc11001100_hook("punctuation", /:/, "object-key-init"),
            variable: cc11001100_hook("variable", t, "object-key-init"),
            operator: cc11001100_hook("operator", n, "object-key-init"),
            important: cc11001100_hook("important", e.languages.sass.important, "object-key-init")
          }
        }
      }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
        selector: {
          pattern: cc11001100_hook("pattern", /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }
      });
    }(Prism), Prism.languages.scala = cc11001100_hook("Prism.languages.scala", Prism.languages.extend("java", {
      keyword: cc11001100_hook("keyword", /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/, "object-key-init"),
      "triple-quoted-string": {
        pattern: cc11001100_hook("pattern", /"""[\s\S]*?"""/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init")
      },
      string: {
        pattern: cc11001100_hook("pattern", /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      builtin: cc11001100_hook("builtin", /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i, "object-key-init"),
      symbol: cc11001100_hook("symbol", /'[^\d\s\\]\w*/, "object-key-init")
    }), "assign"), delete Prism.languages.scala["class-name"], delete Prism.languages.scala.function, Prism.languages.scheme = cc11001100_hook("Prism.languages.scheme", {
      comment: cc11001100_hook("comment", /;.*/, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /"(?:[^"\\]|\\.)*"|'[^()#'\s]+/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      character: {
        pattern: cc11001100_hook("pattern", /#\\(?:[ux][a-fA-F\d]+|[a-zA-Z]+|\S)/, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init")
      },
      keyword: {
        pattern: cc11001100_hook("pattern", /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\s])/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      builtin: {
        pattern: cc11001100_hook("pattern", /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s])/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      number: {
        pattern: cc11001100_hook("pattern", /([\s()])[-+]?(?:\d+\/\d+|\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?)\b/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      boolean: cc11001100_hook("boolean", /#[tf]/, "object-key-init"),
      operator: {
        pattern: cc11001100_hook("pattern", /(\()(?:[-+*%\/]|[<>]=?|=>?)(?=\s|$)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      function: {
        pattern: cc11001100_hook("pattern", /(\()[^()'\s]+(?=[()\s)]|$)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      punctuation: cc11001100_hook("punctuation", /[()']/, "object-key-init")
    }, "assign"), Prism.languages.scss = cc11001100_hook("Prism.languages.scss", Prism.languages.extend("css", {
      comment: {
        pattern: cc11001100_hook("pattern", /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      atrule: {
        pattern: cc11001100_hook("pattern", /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, "object-key-init"),
        inside: {
          rule: cc11001100_hook("rule", /@[\w-]+/, "object-key-init")
        }
      },
      url: cc11001100_hook("url", /(?:[-a-z]+-)?url(?=\()/i, "object-key-init"),
      selector: {
        pattern: cc11001100_hook("pattern", /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, "object-key-init"),
        inside: {
          parent: {
            pattern: cc11001100_hook("pattern", /&/, "object-key-init"),
            alias: cc11001100_hook("alias", "important", "object-key-init")
          },
          placeholder: cc11001100_hook("placeholder", /%[-\w]+/, "object-key-init"),
          variable: cc11001100_hook("variable", /\$[-\w]+|#\{\$[-\w]+\}/, "object-key-init")
        }
      },
      property: {
        pattern: cc11001100_hook("pattern", /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/, "object-key-init"),
        inside: {
          variable: cc11001100_hook("variable", /\$[-\w]+|#\{\$[-\w]+\}/, "object-key-init")
        }
      }
    }), "assign"), Prism.languages.insertBefore("scss", "atrule", {
      keyword: cc11001100_hook("keyword", [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
        pattern: cc11001100_hook("pattern", /( +)(?:from|through)(?= )/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init")
    }), Prism.languages.insertBefore("scss", "important", {
      variable: cc11001100_hook("variable", /\$[-\w]+|#\{\$[-\w]+\}/, "object-key-init")
    }), Prism.languages.insertBefore("scss", "function", {
      placeholder: {
        pattern: cc11001100_hook("pattern", /%[-\w]+/, "object-key-init"),
        alias: cc11001100_hook("alias", "selector", "object-key-init")
      },
      statement: {
        pattern: cc11001100_hook("pattern", /\B!(?:default|optional)\b/i, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      },
      boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init"),
      null: {
        pattern: cc11001100_hook("pattern", /\bnull\b/, "object-key-init"),
        alias: cc11001100_hook("alias", "keyword", "object-key-init")
      },
      operator: {
        pattern: cc11001100_hook("pattern", /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }
    }), Prism.languages.scss.atrule.inside.rest = cc11001100_hook("Prism.languages.scss.atrule.inside.rest", Prism.languages.scss, "assign"), Prism.languages.smalltalk = cc11001100_hook("Prism.languages.smalltalk", {
      comment: cc11001100_hook("comment", /"(?:""|[^"])*"/, "object-key-init"),
      character: {
        pattern: cc11001100_hook("pattern", /\$./, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init")
      },
      string: cc11001100_hook("string", /'(?:''|[^'])*'/, "object-key-init"),
      symbol: cc11001100_hook("symbol", /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i, "object-key-init"),
      "block-arguments": {
        pattern: cc11001100_hook("pattern", /(\[\s*):[^\[|]*\|/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: {
          variable: cc11001100_hook("variable", /:[\da-z]+/i, "object-key-init"),
          punctuation: cc11001100_hook("punctuation", /\|/, "object-key-init")
        }
      },
      "temporary-variables": {
        pattern: cc11001100_hook("pattern", /\|[^|]+\|/, "object-key-init"),
        inside: {
          variable: cc11001100_hook("variable", /[\da-z]+/i, "object-key-init"),
          punctuation: cc11001100_hook("punctuation", /\|/, "object-key-init")
        }
      },
      keyword: cc11001100_hook("keyword", /\b(?:nil|true|false|self|super|new)\b/, "object-key-init"),
      number: cc11001100_hook("number", [/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/, /\b\d+(?:\.\d+)?(?:e-?\d+)?/], "object-key-init"),
      operator: cc11001100_hook("operator", /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[.;:?\[\](){}]/, "object-key-init")
    }, "assign"), function (e) {
      e.languages.smarty = cc11001100_hook("e.languages.smarty", {
        comment: cc11001100_hook("comment", /\{\*[\s\S]*?\*\}/, "object-key-init"),
        delimiter: {
          pattern: cc11001100_hook("pattern", /^\{|\}$/i, "object-key-init"),
          alias: cc11001100_hook("alias", "punctuation", "object-key-init")
        },
        string: cc11001100_hook("string", /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        number: cc11001100_hook("number", /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/, "object-key-init"),
        variable: cc11001100_hook("variable", [/\$(?!\d)\w+/, /#(?!\d)\w+#/, {
          pattern: cc11001100_hook("pattern", /(\.|->)(?!\d)\w+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", /(\[)(?!\d)\w+(?=\])/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }], "object-key-init"),
        function: cc11001100_hook("function", [{
          pattern: cc11001100_hook("pattern", /(\|\s*)@?(?!\d)\w+/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }, /^\/?(?!\d)\w+/, /(?!\d)\w+(?=\()/], "object-key-init"),
        "attr-name": {
          pattern: cc11001100_hook("pattern", /\w+\s*=\s*(?:(?!\d)\w+)?/, "object-key-init"),
          inside: {
            variable: {
              pattern: cc11001100_hook("pattern", /(=\s*)(?!\d)\w+/, "object-key-init"),
              lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
            },
            operator: cc11001100_hook("operator", /=/, "object-key-init")
          }
        },
        punctuation: cc11001100_hook("punctuation", [/[\[\]().,:`]|->/], "object-key-init"),
        operator: cc11001100_hook("operator", [/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/, /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/, /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/], "object-key-init"),
        keyword: cc11001100_hook("keyword", /\b(?:false|off|on|no|true|yes)\b/, "object-key-init")
      }, "assign"), e.hooks.add("before-tokenize", function (t) {
        var n = cc11001100_hook("n", !1, "var-init");
        e.languages["markup-templating"].buildPlaceholders(t, "smarty", /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g, function (e) {
          return "{/literal}" === e && (n = cc11001100_hook("n", !1, "assign")), !n && ("{literal}" === e && (n = cc11001100_hook("n", !0, "assign")), !0);
        });
      }), e.hooks.add("after-tokenize", function (t) {
        e.languages["markup-templating"].tokenizePlaceholders(t, "smarty");
      });
    }(Prism), Prism.languages.turtle = cc11001100_hook("Prism.languages.turtle", {
      comment: {
        pattern: cc11001100_hook("pattern", /#.*/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      "multiline-string": {
        pattern: cc11001100_hook("pattern", /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init"),
        inside: {
          comment: cc11001100_hook("comment", /#.*/, "object-key-init")
        }
      },
      string: {
        pattern: cc11001100_hook("pattern", /"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      url: {
        pattern: cc11001100_hook("pattern", /<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-f]{4}|U[\da-f]{8}))*>/i, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /[<>]/, "object-key-init")
        }
      },
      function: {
        pattern: cc11001100_hook("pattern", /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i, "object-key-init"),
        inside: {
          "local-name": {
            pattern: cc11001100_hook("pattern", /([^:]*:)[\s\S]+/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          },
          prefix: {
            pattern: cc11001100_hook("pattern", /[\s\S]+/, "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", /:/, "object-key-init")
            }
          }
        }
      },
      number: cc11001100_hook("number", /[+-]?\b\d+\.?\d*(?:e[+-]?\d+)?/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}.,;()[\]]|\^\^/, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init"),
      keyword: cc11001100_hook("keyword", [/(?:\ba|@prefix|@base)\b|=/, /\b(?:graph|base|prefix)\b/i], "object-key-init"),
      tag: {
        pattern: cc11001100_hook("pattern", /@[a-z]+(?:-[a-z\d]+)*/i, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /@/, "object-key-init")
        }
      }
    }, "assign"), Prism.languages.trig = cc11001100_hook("Prism.languages.trig", Prism.languages.turtle, "assign"), Prism.languages.sparql = cc11001100_hook("Prism.languages.sparql", Prism.languages.extend("turtle", {
      variable: {
        pattern: cc11001100_hook("pattern", /[?$]\w+/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/i, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("sparql", "punctuation", {
      keyword: cc11001100_hook("keyword", [/\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i, /\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|ROUND|REGEX|REPLACE|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i, /\b(?:GRAPH|BASE|PREFIX)\b/i], "object-key-init")
    }), Prism.languages.rq = cc11001100_hook("Prism.languages.rq", Prism.languages.sparql, "assign"), Prism.languages.sql = cc11001100_hook("Prism.languages.sql", {
      comment: {
        pattern: cc11001100_hook("pattern", /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      variable: cc11001100_hook("variable", [{
        pattern: cc11001100_hook("pattern", /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }, /@[\w.$]+/], "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      function: cc11001100_hook("function", /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:TRUE|FALSE|NULL)\b/i, "object-key-init"),
      number: cc11001100_hook("number", /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[;[\]()`,.]/, "object-key-init")
    }, "assign"), Prism.languages.swift = cc11001100_hook("Prism.languages.swift", Prism.languages.extend("clike", {
      string: {
        pattern: cc11001100_hook("pattern", /("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: {
            pattern: cc11001100_hook("pattern", /\\\((?:[^()]|\([^)]+\))+\)/, "object-key-init"),
            inside: {
              delimiter: {
                pattern: cc11001100_hook("pattern", /^\\\(|\)$/, "object-key-init"),
                alias: cc11001100_hook("alias", "variable", "object-key-init")
              }
            }
          }
        }
      },
      keyword: cc11001100_hook("keyword", /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "object-key-init"),
      constant: cc11001100_hook("constant", /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, "object-key-init"),
      atrule: cc11001100_hook("atrule", /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/, "object-key-init"),
      builtin: cc11001100_hook("builtin", /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/, "object-key-init")
    }), "assign"), Prism.languages.swift.string.inside.interpolation.inside.rest = cc11001100_hook("Prism.languages.swift.string.inside.interpolation.inside.rest", Prism.languages.swift, "assign"), function (e) {
      var t = cc11001100_hook("t", /[*&][^\s[\]{},]+/, "var-init"),
        n = cc11001100_hook("n", /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, "var-init"),
        r = cc11001100_hook("r", "(?:" + n.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + n.source + ")?)", "var-init");
      function i(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        t = cc11001100_hook("t", (t || "").replace(/m/g, "") + "m", "assign");
        var n = cc11001100_hook("n", /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\s*#))/.source.replace(/<<prop>>/g, function () {
          return r;
        }).replace(/<<value>>/g, function () {
          return e;
        }), "var-init");
        return RegExp(n, t);
      }
      e.languages.yaml = cc11001100_hook("e.languages.yaml", {
        scalar: {
          pattern: cc11001100_hook("pattern", RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
            return r;
          })), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "string", "object-key-init")
        },
        comment: cc11001100_hook("comment", /#.*/, "object-key-init"),
        key: {
          pattern: cc11001100_hook("pattern", RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\]},#\s]+?(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
            return r;
          })), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "atrule", "object-key-init")
        },
        directive: {
          pattern: cc11001100_hook("pattern", /(^[ \t]*)%.+/m, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "important", "object-key-init")
        },
        datetime: {
          pattern: cc11001100_hook("pattern", i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "number", "object-key-init")
        },
        boolean: {
          pattern: cc11001100_hook("pattern", i(/true|false/.source, "i"), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "important", "object-key-init")
        },
        null: {
          pattern: cc11001100_hook("pattern", i(/null|~/.source, "i"), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "important", "object-key-init")
        },
        string: {
          pattern: cc11001100_hook("pattern", i(/("|')(?:(?!\2)[^\\\r\n]|\\.)*\2/.source), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        },
        number: {
          pattern: cc11001100_hook("pattern", i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        tag: cc11001100_hook("tag", n, "object-key-init"),
        important: cc11001100_hook("important", t, "object-key-init"),
        punctuation: cc11001100_hook("punctuation", /---|[:[\]{}\-,|>?]|\.\.\./, "object-key-init")
      }, "assign"), e.languages.yml = cc11001100_hook("e.languages.yml", e.languages.yaml, "assign");
    }(Prism), Prism.languages.tap = cc11001100_hook("Prism.languages.tap", {
      fail: cc11001100_hook("fail", /not ok[^#{\n\r]*/, "object-key-init"),
      pass: cc11001100_hook("pass", /ok[^#{\n\r]*/, "object-key-init"),
      pragma: cc11001100_hook("pragma", /pragma [+-][a-z]+/, "object-key-init"),
      bailout: cc11001100_hook("bailout", /bail out!.*/i, "object-key-init"),
      version: cc11001100_hook("version", /TAP version \d+/i, "object-key-init"),
      plan: cc11001100_hook("plan", /\d+\.\.\d+(?: +#.*)?/, "object-key-init"),
      subtest: {
        pattern: cc11001100_hook("pattern", /# Subtest(?:: .*)?/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      punctuation: cc11001100_hook("punctuation", /[{}]/, "object-key-init"),
      directive: cc11001100_hook("directive", /#.*/, "object-key-init"),
      yamlish: {
        pattern: cc11001100_hook("pattern", /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: cc11001100_hook("inside", Prism.languages.yaml, "object-key-init"),
        alias: cc11001100_hook("alias", "language-yaml", "object-key-init")
      }
    }, "assign"), Prism.languages.tcl = cc11001100_hook("Prism.languages.tcl", {
      comment: {
        pattern: cc11001100_hook("pattern", /(^|[^\\])#.*/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      string: {
        pattern: cc11001100_hook("pattern", /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      variable: cc11001100_hook("variable", [{
        pattern: cc11001100_hook("pattern", /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(\$){[^}]+}/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, {
        pattern: cc11001100_hook("pattern", /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }], "object-key-init"),
      function: {
        pattern: cc11001100_hook("pattern", /(^\s*proc[ \t]+)[^\s]+/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      builtin: cc11001100_hook("builtin", [{
        pattern: cc11001100_hook("pattern", /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      }, /\b(?:elseif|else)\b/], "object-key-init"),
      scope: {
        pattern: cc11001100_hook("pattern", /(^\s*)(?:global|upvar|variable)\b/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "constant", "object-key-init")
      },
      keyword: {
        pattern: cc11001100_hook("pattern", /(^\s*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
      },
      operator: cc11001100_hook("operator", /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}()\[\]]/, "object-key-init")
    }, "assign"), Prism.languages.twig = cc11001100_hook("Prism.languages.twig", {
      comment: cc11001100_hook("comment", /\{#[\s\S]*?#\}/, "object-key-init"),
      tag: {
        pattern: cc11001100_hook("pattern", /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/, "object-key-init"),
        inside: {
          ld: {
            pattern: cc11001100_hook("pattern", /^(?:\{\{-?|\{%-?\s*\w+)/, "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", /^(?:\{\{|\{%)-?/, "object-key-init"),
              keyword: cc11001100_hook("keyword", /\w+/, "object-key-init")
            }
          },
          rd: {
            pattern: cc11001100_hook("pattern", /-?(?:%\}|\}\})$/, "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", /.+/, "object-key-init")
            }
          },
          string: {
            pattern: cc11001100_hook("pattern", /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, "object-key-init"),
            inside: {
              punctuation: cc11001100_hook("punctuation", /^['"]|['"]$/, "object-key-init")
            }
          },
          keyword: cc11001100_hook("keyword", /\b(?:even|if|odd)\b/, "object-key-init"),
          boolean: cc11001100_hook("boolean", /\b(?:true|false|null)\b/, "object-key-init"),
          number: cc11001100_hook("number", /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/, "object-key-init"),
          operator: cc11001100_hook("operator", [{
            pattern: cc11001100_hook("pattern", /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/, "object-key-init"),
            lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
          }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/], "object-key-init"),
          property: cc11001100_hook("property", /\b[a-zA-Z_]\w*\b/, "object-key-init"),
          punctuation: cc11001100_hook("punctuation", /[()\[\]{}:.,]/, "object-key-init")
        }
      },
      other: {
        pattern: cc11001100_hook("pattern", /\S(?:[\s\S]*\S)?/, "object-key-init"),
        inside: cc11001100_hook("inside", Prism.languages.markup, "object-key-init")
      }
    }, "assign"), Prism.languages.vala = cc11001100_hook("Prism.languages.vala", Prism.languages.extend("clike", {
      "class-name": cc11001100_hook("class-name", [{
        pattern: cc11001100_hook("pattern", /\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w+)/, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /(\[)[A-Z]\w*(?:\.\w+)*\b/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
        }
      }, {
        pattern: cc11001100_hook("pattern", /((?:\b(?:class|interface|new|struct|enum)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/, "object-key-init"),
        lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
        inside: {
          punctuation: cc11001100_hook("punctuation", /\./, "object-key-init")
        }
      }], "object-key-init"),
      constant: cc11001100_hook("constant", /\b[A-Z0-9_]+\b/, "object-key-init"),
      function: cc11001100_hook("function", /\w+(?=\s*\()/, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:bool|char|double|float|null|size_t|ssize_t|string|unichar|void|int|int8|int16|int32|int64|long|short|uchar|uint|uint8|uint16|uint32|uint64|ulong|ushort|class|delegate|enum|errordomain|interface|namespace|struct|break|continue|do|for|foreach|return|while|else|if|switch|assert|case|default|abstract|const|dynamic|ensures|extern|inline|internal|override|private|protected|public|requires|signal|static|virtual|volatile|weak|async|owned|unowned|try|catch|finally|throw|as|base|construct|delete|get|in|is|lock|new|out|params|ref|sizeof|set|this|throws|typeof|using|value|var|yield)\b/i, "object-key-init"),
      number: cc11001100_hook("number", /(?:\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i, "object-key-init"),
      operator: cc11001100_hook("operator", /\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\];(),.:]/, "object-key-init")
    }), "assign"), Prism.languages.insertBefore("vala", "string", {
      "raw-string": {
        pattern: cc11001100_hook("pattern", /"""[\s\S]*?"""/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        alias: cc11001100_hook("alias", "string", "object-key-init")
      },
      "template-string": {
        pattern: cc11001100_hook("pattern", /@"[\s\S]*?"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init"),
        inside: {
          interpolation: {
            pattern: cc11001100_hook("pattern", /\$(?:\([^)]*\)|[a-zA-Z]\w*)/, "object-key-init"),
            inside: {
              delimiter: {
                pattern: cc11001100_hook("pattern", /^\$\(?|\)$/, "object-key-init"),
                alias: cc11001100_hook("alias", "punctuation", "object-key-init")
              },
              rest: cc11001100_hook("rest", Prism.languages.vala, "object-key-init")
            }
          },
          string: cc11001100_hook("string", /[\s\S]+/, "object-key-init")
        }
      }
    }), Prism.languages.insertBefore("vala", "keyword", {
      regex: {
        pattern: cc11001100_hook("pattern", /\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*(?:$|[\r\n,.;})\]]))/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      }
    }), function (e) {
      e.languages.velocity = cc11001100_hook("e.languages.velocity", e.languages.extend("markup", {}), "assign");
      var t = cc11001100_hook("t", {
        variable: {
          pattern: cc11001100_hook("pattern", /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {}
        },
        string: {
          pattern: cc11001100_hook("pattern", /"[^"]*"|'[^']*'/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        },
        number: cc11001100_hook("number", /\b\d+\b/, "object-key-init"),
        boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/, "object-key-init"),
        operator: cc11001100_hook("operator", /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/, "object-key-init"),
        punctuation: cc11001100_hook("punctuation", /[(){}[\]:,.]/, "object-key-init")
      }, "var-init");
      t.variable.inside = cc11001100_hook("t.variable.inside", {
        string: cc11001100_hook("string", t.string, "object-key-init"),
        function: {
          pattern: cc11001100_hook("pattern", /([^\w-])[a-z][\w-]*(?=\()/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        number: cc11001100_hook("number", t.number, "object-key-init"),
        boolean: cc11001100_hook("boolean", t.boolean, "object-key-init"),
        punctuation: cc11001100_hook("punctuation", t.punctuation, "object-key-init")
      }, "assign"), e.languages.insertBefore("velocity", "comment", {
        unparsed: {
          pattern: cc11001100_hook("pattern", /(^|[^\\])#\[\[[\s\S]*?]]#/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          inside: {
            punctuation: cc11001100_hook("punctuation", /^#\[\[|]]#$/, "object-key-init")
          }
        },
        "velocity-comment": cc11001100_hook("velocity-comment", [{
          pattern: cc11001100_hook("pattern", /(^|[^\\])#\*[\s\S]*?\*#/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "comment", "object-key-init")
        }, {
          pattern: cc11001100_hook("pattern", /(^|[^\\])##.*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "comment", "object-key-init")
        }], "object-key-init"),
        directive: {
          pattern: cc11001100_hook("pattern", /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          inside: {
            keyword: {
              pattern: cc11001100_hook("pattern", /^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/, "object-key-init"),
              inside: {
                punctuation: cc11001100_hook("punctuation", /[{}]/, "object-key-init")
              }
            },
            rest: cc11001100_hook("rest", t, "object-key-init")
          }
        },
        variable: cc11001100_hook("variable", t.variable, "object-key-init")
      }), e.languages.velocity.tag.inside["attr-value"].inside.rest = cc11001100_hook("e.languages.velocity.tag.inside[\"attr-value\"].inside.rest", e.languages.velocity, "assign");
    }(Prism), Prism.languages.verilog = cc11001100_hook("Prism.languages.verilog", {
      comment: cc11001100_hook("comment", /\/\/.*|\/\*[\s\S]*?\*\//, "object-key-init"),
      string: {
        pattern: cc11001100_hook("pattern", /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, "object-key-init"),
        greedy: cc11001100_hook("greedy", !0, "object-key-init")
      },
      property: cc11001100_hook("property", /\B\$\w+\b/, "object-key-init"),
      constant: cc11001100_hook("constant", /\B`\w+\b/, "object-key-init"),
      function: cc11001100_hook("function", /\w+(?=\()/, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/, "object-key-init"),
      important: cc11001100_hook("important", /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/, "object-key-init"),
      number: cc11001100_hook("number", /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i, "object-key-init"),
      operator: cc11001100_hook("operator", /[-+{}^~%*\/?=!<>&|]+/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[[\];(),.:]/, "object-key-init")
    }, "assign"), Prism.languages.vhdl = cc11001100_hook("Prism.languages.vhdl", {
      comment: cc11001100_hook("comment", /--.+/, "object-key-init"),
      "vhdl-vectors": {
        pattern: cc11001100_hook("pattern", /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i, "object-key-init"),
        alias: cc11001100_hook("alias", "number", "object-key-init")
      },
      "quoted-function": {
        pattern: cc11001100_hook("pattern", /"\S+?"(?=\()/, "object-key-init"),
        alias: cc11001100_hook("alias", "function", "object-key-init")
      },
      string: cc11001100_hook("string", /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/, "object-key-init"),
      constant: cc11001100_hook("constant", /\b(?:use|library)\b/i, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i, "object-key-init"),
      boolean: cc11001100_hook("boolean", /\b(?:true|false)\b/i, "object-key-init"),
      function: cc11001100_hook("function", /\w+(?=\()/, "object-key-init"),
      number: cc11001100_hook("number", /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i, "object-key-init"),
      operator: cc11001100_hook("operator", /[<>]=?|:=|[-+*/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\];(),.:]/, "object-key-init")
    }, "assign"), Prism.languages.vim = cc11001100_hook("Prism.languages.vim", {
      string: cc11001100_hook("string", /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/, "object-key-init"),
      comment: cc11001100_hook("comment", /".*/, "object-key-init"),
      function: cc11001100_hook("function", /\w+(?=\()/, "object-key-init"),
      keyword: cc11001100_hook("keyword", /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/, "object-key-init"),
      builtin: cc11001100_hook("builtin", /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/, "object-key-init"),
      number: cc11001100_hook("number", /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i, "object-key-init"),
      operator: cc11001100_hook("operator", /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/, "object-key-init"),
      punctuation: cc11001100_hook("punctuation", /[{}[\](),;:]/, "object-key-init")
    }, "assign"), function (e) {
      e.languages.xquery = cc11001100_hook("e.languages.xquery", e.languages.extend("markup", {
        "xquery-comment": {
          pattern: cc11001100_hook("pattern", /\(:[\s\S]*?:\)/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "comment", "object-key-init")
        },
        string: {
          pattern: cc11001100_hook("pattern", /(["'])(?:\1\1|(?!\1)[\s\S])*\1/, "object-key-init"),
          greedy: cc11001100_hook("greedy", !0, "object-key-init")
        },
        extension: {
          pattern: cc11001100_hook("pattern", /\(#.+?#\)/, "object-key-init"),
          alias: cc11001100_hook("alias", "symbol", "object-key-init")
        },
        variable: cc11001100_hook("variable", /\$[\w-:]+/, "object-key-init"),
        axis: {
          pattern: cc11001100_hook("pattern", /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "operator", "object-key-init")
        },
        "keyword-operator": {
          pattern: cc11001100_hook("pattern", /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "operator", "object-key-init")
        },
        keyword: {
          pattern: cc11001100_hook("pattern", /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        function: cc11001100_hook("function", /[\w-]+(?::[\w-]+)*(?=\s*\()/, "object-key-init"),
        "xquery-element": {
          pattern: cc11001100_hook("pattern", /(element\s+)[\w-]+(?::[\w-]+)*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "tag", "object-key-init")
        },
        "xquery-attribute": {
          pattern: cc11001100_hook("pattern", /(attribute\s+)[\w-]+(?::[\w-]+)*/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init"),
          alias: cc11001100_hook("alias", "attr-name", "object-key-init")
        },
        builtin: {
          pattern: cc11001100_hook("pattern", /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        },
        number: cc11001100_hook("number", /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/, "object-key-init"),
        operator: cc11001100_hook("operator", [/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/, {
          pattern: cc11001100_hook("pattern", /(\s)-(?=\s)/, "object-key-init"),
          lookbehind: cc11001100_hook("lookbehind", !0, "object-key-init")
        }], "object-key-init"),
        punctuation: cc11001100_hook("punctuation", /[[\](){},;:/]/, "object-key-init")
      }), "assign"), e.languages.xquery.tag.pattern = cc11001100_hook("e.languages.xquery.tag.pattern", /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i, "assign"), e.languages.xquery.tag.inside["attr-value"].pattern = cc11001100_hook("e.languages.xquery.tag.inside[\"attr-value\"].pattern", /=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i, "assign"), e.languages.xquery.tag.inside["attr-value"].inside.punctuation = cc11001100_hook("e.languages.xquery.tag.inside[\"attr-value\"].inside.punctuation", /^="|"$/, "assign"), e.languages.xquery.tag.inside["attr-value"].inside.expression = cc11001100_hook("e.languages.xquery.tag.inside[\"attr-value\"].inside.expression", {
        pattern: cc11001100_hook("pattern", /{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}/, "object-key-init"),
        inside: cc11001100_hook("inside", e.languages.xquery, "object-key-init"),
        alias: cc11001100_hook("alias", "language-xquery", "object-key-init")
      }, "assign");
      var t = function e(t) {
          return "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(e).join("");
        },
        n = function n(r) {
          for (var i = cc11001100_hook("i", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < r.length; a++) {
            var s = cc11001100_hook("s", r[a], "var-init"),
              o = cc11001100_hook("o", !1, "var-init");
            if ("string" != typeof s && ("tag" === s.type && s.content[0] && "tag" === s.content[0].type ? "</" === s.content[0].content[0].content ? i.length > 0 && i[i.length - 1].tagName === t(s.content[0].content[1]) && i.pop() : "/>" === s.content[s.content.length - 1].content || i.push({
              tagName: cc11001100_hook("tagName", t(s.content[0].content[1]), "object-key-init"),
              openedBraces: cc11001100_hook("openedBraces", 0, "object-key-init")
            }) : !(i.length > 0 && "punctuation" === s.type && "{" === s.content) || r[a + 1] && "punctuation" === r[a + 1].type && "{" === r[a + 1].content || r[a - 1] && "plain-text" === r[a - 1].type && "{" === r[a - 1].content ? i.length > 0 && i[i.length - 1].openedBraces > 0 && "punctuation" === s.type && "}" === s.content ? i[i.length - 1].openedBraces-- : "comment" !== s.type && (o = cc11001100_hook("o", !0, "assign")) : i[i.length - 1].openedBraces++), (o || "string" == typeof s) && i.length > 0 && 0 === i[i.length - 1].openedBraces) {
              var l = cc11001100_hook("l", t(s), "var-init");
              a < r.length - 1 && ("string" == typeof r[a + 1] || "plain-text" === r[a + 1].type) && (l += cc11001100_hook("l", t(r[a + 1]), "assign"), r.splice(a + 1, 1)), a > 0 && ("string" == typeof r[a - 1] || "plain-text" === r[a - 1].type) && (l = cc11001100_hook("l", t(r[a - 1]) + l, "assign"), r.splice(a - 1, 1), a--), /^\s+$/.test(l) ? r[a] = cc11001100_hook("r[a]", l, "assign") : r[a] = cc11001100_hook("r[a]", new e.Token("plain-text", l, null, l), "assign");
            }
            s.content && "string" != typeof s.content && n(s.content);
          }
        };
      e.hooks.add("after-tokenize", function (e) {
        "xquery" === e.language && n(e.tokens);
      });
    }(Prism);
  }
}]);
//# sourceMappingURL=lib-9974496f.f11a1e22ce8cd35d4d56.js.map