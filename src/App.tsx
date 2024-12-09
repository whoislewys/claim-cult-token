import { ConnectButton } from "@rainbow-me/rainbowkit";
import merkleProofs from "./merkle.json";
import { useAccount } from "wagmi";
import { formatUnits, parseUnits, zeroAddress } from "viem";
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        padding: "4px 8px",
        backgroundColor: copied ? "#4CAF50" : "#f8f9fa",
        border: "1px solid #ddd",
        borderRadius: "4px",
        cursor: "pointer",
        color: copied ? "white" : "black",
        transition: "all 0.2s ease",
      }}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function App() {
  const proofs = merkleProofs as any;
  const { address } = useAccount();
  const yourProofs = proofs?.[address?.toLowerCase() ?? zeroAddress];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: 12,
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <ConnectButton />
      </div>
      <div style={{ maxWidth: "60ch" }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Connect your wallet to this site.</li>
          <li>
            Click the claim link to open Etherscan.
            <div>
              (Claim link:{" "}
              <a
                href="https://etherscan.io/address/0x000000F534CaA75BD1a3950aB32D6bd24D2e6B76#writeContract#F2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://etherscan.io/address/0x000000F534CaA75BD1a3950aB32D6bd24D2e6B76#writeContract#F2
              </a>
              )
            </div>
          </li>
          <li>
            Connect your wallet to Etherscan (click the "Connect to Web3"
            button).
          </li>
          <li>
            Copy the fields from this site and paste them into the respective
            _destination, _amount, _proof, and string fields in Etherscan.
          </li>
        </ol>
      </div>
      <hr style={{ height: "1px", backgroundColor: "black" }} />
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div style={{ marginBottom: "8px" }}>claim</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <input
                disabled
                value={0}
                style={{
                  flex: "1",
                  minWidth: "200px",
                  overflowX: "scroll",
                  cursor: "default",
                  backgroundColor: "#f5f5f5",
                  padding: "4px 8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              <CopyButton text={"0"} />
            </div>
          </div>

          <div>
            <div style={{ marginBottom: "8px" }}>_destination</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <input
                disabled
                value={address}
                style={{
                  flex: "1",
                  minWidth: "200px",
                  overflowX: "scroll",
                  cursor: "default",
                  backgroundColor: "#f5f5f5",
                  padding: "4px 8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              <CopyButton text={address ?? ""} />
            </div>
          </div>

          <div>
            <div style={{ marginBottom: "8px" }}>_amount</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <input
                disabled
                value={yourProofs?.amount}
                style={{
                  flex: "1",
                  minWidth: "200px",
                  overflowX: "scroll",
                  cursor: "default",
                  backgroundColor: "#f5f5f5",
                  padding: "4px 8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              <CopyButton text={yourProofs?.amount} />
            </div>
          </div>

          <div>
            <div style={{ marginBottom: "8px" }}>_proof</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <input
                disabled
                value={yourProofs?.proof}
                style={{
                  flex: "1",
                  minWidth: "200px",
                  overflowX: "scroll",
                  cursor: "default",
                  backgroundColor: "#f5f5f5",
                  padding: "4px 8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              <CopyButton text={yourProofs?.proof} />
            </div>
          </div>

          <div>
            <div style={{ marginBottom: "8px" }}>string:</div>
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "8px",
                  flexWrap: "wrap",
                }}
              >
                <input
                  disabled
                  value={`Claimed courtesy of whoislewys (https://x.com/whoislewys), with the support of the Terrence Andrew Research Center (0xTARC).beetlePicture:https://web.archive.org/web/20230209160008if_/https://static.wikia.nocookie.net/digimon/images/f/f6/HerculesKabuterimon_b.jpg/revision/latest`}
                  style={{
                    flex: "1",
                    minWidth: "200px",
                    overflowX: "scroll",
                    cursor: "default",
                    backgroundColor: "#f5f5f5",
                    padding: "4px 8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
                <CopyButton
                  text={`Claimed courtesy of whoislewys (https://x.com/whoislewys), with the support of the Terrence Andrew Research Center (0xTARC).beetlePicture:https://web.archive.org/web/20230209160008if_/https://static.wikia.nocookie.net/digimon/images/f/f6/HerculesKabuterimon_b.jpg/revision/latest`}
                />
              </div>

              <p>(mandatory beetle picture, encoded in string input with a hardcoded link to minimize gas usage. an h-kabuterimon image was chosen because he is both beetle and cheesy)</p>
              <img src="https://web.archive.org/web/20230209160008if_/https://static.wikia.nocookie.net/digimon/images/f/f6/HerculesKabuterimon_b.jpg/revision/latest"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
