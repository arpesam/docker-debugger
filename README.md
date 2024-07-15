# About
A simple base project showing how to run docker and a vscode debugger plus nodemon

## Initializing
- `git clone git@github.com:arpesam/docker-debugger.git`
- `cd docker-debugger`
- `docker-compose build`
- `docker-compose up`

You can send a `GET` request to `http://localhots:4000`



```mermaid
flowchart LR

    START:::hidden -->|NewHandle| Handle -->|NewContext| Context

    Context -->|Encode Inputs| Encoder

    Handle -->|Encode Ruleset| Encoder
    Handle -->|Init WAF| Library
    Context -->|Decode Result| Decoder

    Handle -->|Decode Init Errors| Decoder

    Context -->|Run| Library
    Context -->|Store Go References| CGORefPool

    Encoder -->|Allocate Waf Objects| TempCGORefPool

    TempCGORefPool -->|Copy after each encoding| CGORefPool

    Library -->|Call C code| libddwaf

    classDef hidden display: none;
```
