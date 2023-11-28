import { Sections } from "../content/config"
export type SectionContent = { title: string; url: string; children?: { title: string; url: string }[] }
type SectionEntry = {
  section: string
  contents: SectionContent[]
}

export const SIDEBAR: Partial<Record<Sections, SectionEntry[]>> = {
  dataFeeds: [
    {
      section: "Chainlink Data Feeds",
      contents: [
        {
          title: "Overview",
          url: "data-feeds",
        },
        {
          title: "Getting Started",
          url: "data-feeds/getting-started",
        },
        {
          title: "Price Feeds",
          url: "data-feeds/price-feeds",
        },
        {
          title: "Proof of Reserve Feeds",
          url: "data-feeds/proof-of-reserve",
        },
        {
          title: "NFT Floor Price Feeds",
          url: "data-feeds/nft-floor-price",
        },
        {
          title: "Rate and Volatility Feeds",
          url: "data-feeds/rates-feeds",
        },
        {
          title: "L2 Sequencer Uptime Feeds",
          url: "data-feeds/l2-sequencer-feeds",
        },
      ],
    },
    {
      section: "Feed Addresses",
      contents: [
        {
          title: "Price Feed Addresses",
          url: "data-feeds/price-feeds/addresses",
        },
        {
          title: "Proof of Reserve Addresses",
          url: "data-feeds/proof-of-reserve/addresses",
        },
        {
          title: "NFT Floor Price Addresses",
          url: "data-feeds/nft-floor-price/addresses",
        },
        {
          title: "Rate and Volatility Feed Addresses",
          url: "data-feeds/rates-feeds/addresses",
        },
        {
          title: "Selecting Quality Data Feeds",
          url: "data-feeds/selecting-data-feeds",
        },
      ],
    },
    {
      section: "Ethereum and EVM Guides",
      contents: [
        {
          title: "Using Data Feeds",
          url: "data-feeds/using-data-feeds",
        },
        {
          title: "Getting Historical Data",
          url: "data-feeds/historical-data",
        },
        {
          title: "Using Feed Registry",
          url: "data-feeds/feed-registry",
        },
        {
          title: "Using ENS with Data Feeds",
          url: "data-feeds/ens",
        },
      ],
    },
    {
      section: "Solana Guides",
      contents: [
        {
          title: "Data Feeds on Solana",
          url: "data-feeds/solana",
        },
        {
          title: "Using Data Feeds Off-Chain",
          url: "data-feeds/solana/using-data-feeds-off-chain",
        },
        {
          title: "Using Data Feeds On-Chain",
          url: "data-feeds/solana/using-data-feeds-solana",
        },
      ],
    },
    {
      section: "StarkNet Guides",
      contents: [
        {
          title: "Using Data Feeds on StarkNet",
          url: "data-feeds/starknet",
        },
      ],
    },
    {
      section: "API Reference",
      contents: [
        {
          title: "Data Feeds API Reference",
          url: "data-feeds/api-reference",
        },
        {
          title: "Feed Registry API Reference",
          url: "data-feeds/feed-registry/feed-registry-functions",
        },
      ],
    },
    {
      section: "Resources",
      contents: [
        {
          title: "Learning Resources",
          url: "getting-started/other-tutorials?parent=dataFeeds",
        },
        {
          title: "Smart Contract Overview",
          url: "getting-started/conceptual-overview?parent=dataFeeds",
        },
        {
          title: "LINK Token Contracts",
          url: "resources/link-token-contracts?parent=dataFeeds",
          children: [
            {
              title: "Acquire testnet LINK",
              url: "resources/acquire-link?parent=dataFeeds",
            },
            {
              title: "Fund Your Contracts",
              url: "resources/fund-your-contract?parent=dataFeeds",
            },
          ],
        },
        {
          title: "Starter Kits and Frameworks",
          url: "resources/create-a-chainlinked-project?parent=dataFeeds",
        },
        {
          title: "Bridges and Associated Risks",
          url: "resources/bridge-risks?parent=dataFeeds",
        },
        {
          title: "Chainlink Architecture",
          url: "architecture-overview/architecture-overview?parent=dataFeeds",
          children: [
            {
              title: "Basic Request Model",
              url: "architecture-overview/architecture-request-model?parent=dataFeeds",
            },
            {
              title: "Decentralized Data Model",
              url: "architecture-overview/architecture-decentralized-model?parent=dataFeeds",
            },
            {
              title: "Off-Chain Reporting",
              url: "architecture-overview/off-chain-reporting?parent=dataFeeds",
            },
          ],
        },
        {
          title: "Developer Communications",
          url: "resources/developer-communications?parent=dataFeeds",
          children: [
            { title: "Getting Help", url: "resources/getting-help?parent=dataFeeds" },
            { title: "Hackathon Resources", url: "resources/hackathon-resources?parent=dataFeeds" },
          ],
        },
        {
          title: "Contributing to Chainlink",
          url: "resources/contributing-to-chainlink?parent=dataFeeds",
        },
      ],
    },
  ],
  dataStreams: [
    {
      section: "Chainlink Data Streams",
      contents: [
        {
          title: "Overview",
          url: "data-streams",
        },
        {
          title: "Getting Started",
          url: "data-streams/getting-started",
        },
        {
          title: "Stream IDs",
          url: "data-streams/stream-ids",
        },
        {
          title: "Release Notes",
          url: "data-streams/release-notes",
        },
      ],
    },
    {
      section: "Reference",
      contents: [
        {
          title: "Report Schema",
          url: "data-streams/reference/report-schema",
        },
        {
          title: "Interfaces",
          url: "data-streams/reference/interfaces",
        },
      ],
    },
    {
      section: "Resources",
      contents: [
        {
          title: "Learning Resources",
          url: "getting-started/other-tutorials?parent=dataStreams",
        },
        {
          title: "Smart Contract Overview",
          url: "getting-started/conceptual-overview?parent=dataStreams",
          children: [
            {
              title: "Deploy Your First Smart Contract",
              url: "getting-started/deploy-your-first-contract?parent=dataStreams",
            },
          ],
        },
        {
          title: "LINK Token Contracts",
          url: "resources/link-token-contracts?parent=dataStreams",
          children: [
            {
              title: "Acquire testnet LINK",
              url: "resources/acquire-link?parent=dataStreams",
            },
            {
              title: "Fund Your Contracts",
              url: "resources/fund-your-contract?parent=dataStreams",
            },
          ],
        },
        {
          title: "Starter Kits and Frameworks",
          url: "resources/create-a-chainlinked-project?parent=dataStreams",
        },
        {
          title: "Bridges and Associated Risks",
          url: "resources/bridge-risks?parent=dataStreams",
        },
        {
          title: "Chainlink Architecture",
          url: "architecture-overview/architecture-overview?parent=dataStreams",
          children: [
            {
              title: "Basic Request Model",
              url: "architecture-overview/architecture-request-model?parent=dataStreams",
            },
            {
              title: "Decentralized Data Model",
              url: "architecture-overview/architecture-decentralized-model?parent=dataStreams",
            },
            {
              title: "Off-Chain Reporting",
              url: "architecture-overview/off-chain-reporting?parent=dataStreams",
            },
          ],
        },
        {
          title: "Developer Communications",
          url: "resources/developer-communications?parent=dataStreams",
          children: [
            { title: "Getting Help", url: "resources/getting-help?parent=dataStreams" },
            { title: "Hackathon Resources", url: "resources/hackathon-resources?parent=dataStreams" },
          ],
        },
        {
          title: "Contributing to Chainlink",
          url: "resources/contributing-to-chainlink?parent=dataStreams",
        },
      ],
    },
  ],
  automation: [
    {
      section: "Chainlink Automation",
      contents: [
        {
          title: "Overview",
          url: "chainlink-automation",
        },
        {
          title: "Getting Started",
          url: "chainlink-automation/overview/getting-started",
        },
        {
          title: "Billing and Costs",
          url: "chainlink-automation/overview/automation-economics",
        },
        {
          title: "Supported Networks",
          url: "chainlink-automation/overview/supported-networks",
        },
        {
          title: "Release Notes",
          url: "chainlink-automation/overview/automation-release-notes",
        },
      ],
    },
    {
      section: "Guides",
      contents: [
        {
          title: "Create Automation-Compatible Contracts",
          url: "chainlink-automation/guides/compatible-contracts",
        },
        {
          title: "Access Data Streams Using Automation",
          url: "chainlink-automation/guides/streams-lookup",
        },
        {
          title: "Register Time-Based Upkeeps",
          url: "chainlink-automation/guides/job-scheduler",
        },
        {
          title: "Register Custom Logic Upkeeps",
          url: "chainlink-automation/guides/register-upkeep",
        },
        {
          title: "Register Log Trigger Upkeeps",
          url: "chainlink-automation/guides/log-trigger",
        },
        {
          title: "Register Upkeeps Programmatically",
          url: "chainlink-automation/guides/register-upkeep-in-contract",
        },
        {
          title: "Secure Upkeeps Using the Forwarder",
          url: "chainlink-automation/guides/forwarder",
        },
        {
          title: "Create Flexible, Secure, and Low-Cost Smart Contracts",
          url: "chainlink-automation/guides/flexible-upkeeps",
        },
        {
          title: "Manage your Upkeeps",
          url: "chainlink-automation/guides/manage-upkeeps",
        },
      ],
    },
    {
      section: "Concepts",
      contents: [
        {
          title: "Concepts",
          url: "chainlink-automation/concepts/automation-concepts",
        },
        {
          title: "Architecture",
          url: "chainlink-automation/concepts/automation-architecture",
        },
        {
          title: "Best Practices",
          url: "chainlink-automation/concepts/best-practice",
        },
      ],
    },
    {
      section: "Reference",
      contents: [
        {
          title: "Contracts",
          url: "chainlink-automation/reference/automation-contracts",
        },
        {
          title: "Interfaces",
          url: "chainlink-automation/reference/automation-interfaces",
        },
        {
          title: "Troubleshooting and Debugging",
          url: "chainlink-automation/reference/debugging-errors",
        },
      ],
    },
    {
      section: "Resources",
      contents: [
        {
          title: "Learning Resources",
          url: "getting-started/other-tutorials?parent=automation",
        },
        {
          title: "Smart Contract Overview",
          url: "getting-started/conceptual-overview?parent=automation",
        },
        {
          title: "LINK Token Contracts",
          url: "resources/link-token-contracts?parent=automation",
          children: [
            {
              title: "Acquire testnet LINK",
              url: "resources/acquire-link?parent=automation",
            },
            {
              title: "Fund Your Contracts",
              url: "resources/fund-your-contract?parent=automation",
            },
          ],
        },
        {
          title: "Starter Kits and Frameworks",
          url: "resources/create-a-chainlinked-project?parent=automation",
        },
        {
          title: "Bridges and Associated Risks",
          url: "resources/bridge-risks?parent=automation",
        },
        {
          title: "Chainlink Architecture",
          url: "architecture-overview/architecture-overview?parent=automation",
          children: [
            {
              title: "Basic Request Model",
              url: "architecture-overview/architecture-request-model?parent=automation",
            },
            {
              title: "Decentralized Data Model",
              url: "architecture-overview/architecture-decentralized-model?parent=automation",
            },
            {
              title: "Off-Chain Reporting",
              url: "architecture-overview/off-chain-reporting?parent=automation",
            },
          ],
        },
        {
          title: "Developer Communications",
          url: "resources/developer-communications?parent=automation",
          children: [
            { title: "Getting Help", url: "resources/getting-help?parent=automation" },
            { title: "Hackathon Resources", url: "resources/hackathon-resources?parent=automation" },
          ],
        },
        {
          title: "Contributing to Chainlink",
          url: "resources/contributing-to-chainlink?parent=automation",
        },
      ],
    },
  ],
  chainlinkFunctions: [
    {
      section: "Chainlink Functions",
      contents: [
        {
          title: "Overview",
          url: "chainlink-functions",
        },
        {
          title: "Getting Started",
          url: "chainlink-functions/getting-started",
        },
        {
          title: "Supported Networks",
          url: "chainlink-functions/supported-networks",
        },
        {
          title: "Service Responsibility",
          url: "chainlink-functions/service-responsibility",
        },
        {
          title: "Billing",
          url: "chainlink-functions/resources/billing",
        },
        {
          title: "Release Notes",
          url: "chainlink-functions/resources/release-notes",
        },
      ],
    },
    {
      section: "Guides",
      contents: [
        {
          title: "Simple Computation",
          url: "chainlink-functions/tutorials/simple-computation",
        },
        {
          title: "Call an API",
          url: "chainlink-functions/tutorials/api-query-parameters",
        },
        {
          title: "Return Custom Data Types",
          url: "chainlink-functions/tutorials/api-custom-response",
        },
        {
          title: "POST Data to an API",
          url: "chainlink-functions/tutorials/api-post-data",
        },
        {
          title: "Using DON-hosted Secrets in Requests",
          url: "chainlink-functions/tutorials/api-use-secrets",
        },
        {
          title: "Offchain secrets - Using Gists",
          url: "chainlink-functions/tutorials/api-use-secrets-gist",
        },
        {
          title: "Offchain secrets - Other methods",
          url: "chainlink-functions/tutorials/api-use-secrets-offchain",
        },
        {
          title: "Call Multiple Data Sources",
          url: "chainlink-functions/tutorials/api-multiple-calls",
        },
        {
          title: "Encode request data off-chain",
          url: "chainlink-functions/tutorials/encode-request-offchain",
        },
        {
          title: "Automate your Functions (Time-based Automation)",
          url: "chainlink-functions/tutorials/automate-functions",
        },
        {
          title: "Automate your Functions (Custom Logic Automation)",
          url: "chainlink-functions/tutorials/automate-functions-custom-logic",
        },
      ],
    },
    {
      section: "Concepts",
      contents: [
        {
          title: "Architecture",
          url: "chainlink-functions/resources/architecture",
        },
        {
          title: "Secrets Management",
          url: "chainlink-functions/resources/secrets",
        },
        {
          title: "Functions playground",
          url: "chainlink-functions/resources/playground",
        },
        {
          title: "Managing Subscriptions",
          url: "chainlink-functions/resources/subscriptions",
        },
        {
          title: "Service Limits",
          url: "chainlink-functions/resources/service-limits",
        },
      ],
    },
    {
      section: "API Reference",
      contents: [
        {
          title: "FunctionsClient",
          url: "chainlink-functions/api-reference/functions-client",
        },
        {
          title: "FunctionsRequest library",
          url: "chainlink-functions/api-reference/functions-request",
        },
        {
          title: "JavaScript source code",
          url: "chainlink-functions/api-reference/javascript-source",
        },
      ],
    },
    {
      section: "Resources",
      contents: [
        {
          title: "Learning Resources",
          url: "getting-started/other-tutorials?parent=chainlinkFunctions",
        },
        {
          title: "Smart Contract Overview",
          url: "getting-started/conceptual-overview?parent=chainlinkFunctions",
        },
        {
          title: "LINK Token Contracts",
          url: "resources/link-token-contracts?parent=chainlinkFunctions",
          children: [
            {
              title: "Acquire testnet LINK",
              url: "resources/acquire-link?parent=chainlinkFunctions",
            },
            {
              title: "Fund Your Contracts",
              url: "resources/fund-your-contract?parent=chainlinkFunctions",
            },
          ],
        },
        {
          title: "Starter Kits and Frameworks",
          url: "resources/create-a-chainlinked-project?parent=chainlinkFunctions",
        },
        {
          title: "Bridges and Associated Risks",
          url: "resources/bridge-risks?parent=chainlinkFunctions",
        },
        {
          title: "Chainlink Architecture",
          url: "architecture-overview/architecture-overview?parent=chainlinkFunctions",
          children: [
            {
              title: "Basic Request Model",
              url: "architecture-overview/architecture-request-model?parent=chainlinkFunctions",
            },
            {
              title: "Decentralized Data Model",
              url: "architecture-overview/architecture-decentralized-model?parent=chainlinkFunctions",
            },
            {
              title: "Off-Chain Reporting",
              url: "architecture-overview/off-chain-reporting?parent=chainlinkFunctions",
            },
          ],
        },
        {
          title: "Developer Communications",
          url: "resources/developer-communications?parent=chainlinkFunctions",
          children: [
            { title: "Getting Help", url: "resources/getting-help?parent=chainlinkFunctions" },
            { title: "Hackathon Resources", url: "resources/hackathon-resources?parent=chainlinkFunctions" },
          ],
        },
        {
          title: "Contributing to Chainlink",
          url: "resources/contributing-to-chainlink?parent=chainlinkFunctions",
        },
      ],
    },
  ],
  vrf: [
    {
      section: "Chainlink VRF",
      contents: [
        {
          title: "Overview",
          url: "vrf",
        },
        {
          title: "Getting Started",
          url: "vrf/v2/getting-started",
        },
        {
          title: "Security Considerations",
          url: "vrf/v2/security",
        },
        {
          title: "Best Practices",
          url: "vrf/v2/best-practices",
        },
        {
          title: "Billing",
          url: "vrf/v2/estimating-costs",
        },
        {
          title: "Release Notes",
          url: "vrf/release-notes",
        },
      ],
    },
    {
      section: "Subscription Method",
      contents: [
        {
          title: "Introduction",
          url: "vrf/v2/subscription",
        },
        {
          title: "Get a Random Number",
          url: "vrf/v2/subscription/examples/get-a-random-number",
        },
        {
          title: "Programmatic Subscription",
          url: "vrf/v2/subscription/examples/programmatic-subscription",
        },
        {
          title: "Test Locally Using a Mock Contract",
          url: "vrf/v2/subscription/examples/test-locally",
        },
        {
          title: "Subscription Manager UI",
          url: "vrf/v2/subscription/ui",
        },
        {
          title: "Supported Networks",
          url: "vrf/v2/subscription/supported-networks",
        },
        {
          title: "Migrating from VRF v1",
          url: "vrf/v2/subscription/migration-from-v1",
        },
      ],
    },
    {
      section: "Direct Funding Method",
      contents: [
        {
          title: "Introduction",
          url: "vrf/v2/direct-funding",
        },
        {
          title: "Get a Random Number",
          url: "vrf/v2/direct-funding/examples/get-a-random-number",
        },
        {
          title: "Test Locally Using a Mock Contract",
          url: "vrf/v2/direct-funding/examples/test-locally",
        },
        {
          title: "Supported Networks",
          url: "vrf/v2/direct-funding/supported-networks",
        },
        {
          title: "Migrating from VRF v1",
          url: "vrf/v2/direct-funding/migration-from-v1",
        },
      ],
    },
    {
      section: "Resources",
      contents: [
        {
          title: "Learning Resources",
          url: "getting-started/other-tutorials?parent=vrf",
        },
        {
          title: "Smart Contract Overview",
          url: "getting-started/conceptual-overview?parent=vrf",
        },
        {
          title: "LINK Token Contracts",
          url: "resources/link-token-contracts?parent=vrf",
          children: [
            {
              title: "Acquire testnet LINK",
              url: "resources/acquire-link?parent=vrf",
            },
            {
              title: "Fund Your Contracts",
              url: "resources/fund-your-contract?parent=vrf",
            },
          ],
        },
        {
          title: "Starter Kits and Frameworks",
          url: "resources/create-a-chainlinked-project?parent=vrf",
        },
        {
          title: "Bridges and Associated Risks",
          url: "resources/bridge-risks?parent=vrf",
        },
        {
          title: "Chainlink Architecture",
          url: "architecture-overview/architecture-overview?parent=vrf",
          children: [
            {
              title: "Basic Request Model",
              url: "architecture-overview/architecture-request-model?parent=vrf",
            },
            {
              title: "Decentralized Data Model",
              url: "architecture-overview/architecture-decentralized-model?parent=vrf",
            },
            {
              title: "Off-Chain Reporting",
              url: "architecture-overview/off-chain-reporting?parent=vrf",
            },
          ],
        },
        {
          title: "Developer Communications",
          url: "resources/developer-communications?parent=vrf",
          children: [
            { title: "Getting Help", url: "resources/getting-help?parent=vrf" },
            { title: "Hackathon Resources", url: "resources/hackathon-resources?parent=vrf" },
          ],
        },
        {
          title: "Contributing to Chainlink",
          url: "resources/contributing-to-chainlink?parent=vrf",
        },
      ],
    },
  ],
  ccip: [
    {
      section: "Chainlink CCIP",
      contents: [
        {
          title: "Overview",
          url: "ccip",
        },
        {
          title: "Getting Started",
          url: "ccip/getting-started",
        },
        {
          title: "Supported Networks",
          url: "ccip/supported-networks",
          children: [
            {
              title: "Mainnet",
              url: "ccip/supported-networks/mainnet",
            },
            {
              title: "Testnet",
              url: "ccip/supported-networks/testnet",
            },
          ],
        },
        {
          title: "Billing",
          url: "ccip/billing",
        },
        {
          title: "Release Notes",
          url: "ccip/release-notes",
        },
      ],
    },
    {
      section: "Guides",
      contents: [
        {
          title: "Transfer Tokens",
          url: "ccip/tutorials/cross-chain-tokens",
        },
        {
          title: "Transfer Tokens With Data",
          url: "ccip/tutorials/programmable-token-transfers",
        },
        {
          title: "Manual execution",
          url: "ccip/tutorials/manual-execution",
        },
        {
          title: "Transfer Tokens With Data - Defensive Example",
          url: "ccip/tutorials/programmable-token-transfers-defensive",
        },
        {
          title: "Transfer Tokens Between EOAs",
          url: "ccip/tutorials/cross-chain-tokens-from-eoa",
        },
        {
          title: "Send Arbitrary Data",
          url: "ccip/tutorials/send-arbitrary-data",
        },
        {
          title: "Acquire Test Tokens",
          url: "ccip/test-tokens",
        },
      ],
    },
    {
      section: "Concepts",
      contents: [
        {
          title: "Concept Overview",
          url: "ccip/concepts",
        },
        {
          title: "Architecture",
          url: "ccip/architecture",
        },
        {
          title: "Best Practices",
          url: "ccip/best-practices",
        },
        {
          title: "Service Limits",
          url: "ccip/service-limits",
        },
      ],
    },
    {
      section: "API Reference",
      contents: [
        {
          title: "IRouterClient",
          url: "ccip/api-reference/i-router-client",
        },
        {
          title: "CCIPReceiver",
          url: "ccip/api-reference/ccip-receiver",
        },
        {
          title: "Client Library",
          url: "ccip/api-reference/client",
        },
        {
          title: "Errors",
          url: "ccip/api-reference/errors",
        },
      ],
    },
    {
      section: "Examples",
      contents: [
        {
          title: "Cross-chain dApps and Tools",
          url: "ccip/examples",
        },
      ],
    },
    {
      section: "Resources",
      contents: [
        {
          title: "Learning Resources",
          url: "getting-started/other-tutorials?parent=ccip",
        },
        {
          title: "Smart Contract Overview",
          url: "getting-started/conceptual-overview?parent=ccip",
        },
        {
          title: "LINK Token Contracts",
          url: "resources/link-token-contracts?parent=ccip",
          children: [
            {
              title: "Acquire testnet LINK",
              url: "resources/acquire-link?parent=ccip",
            },
            {
              title: "Fund Your Contracts",
              url: "resources/fund-your-contract?parent=ccip",
            },
          ],
        },
        {
          title: "Starter Kits and Frameworks",
          url: "resources/create-a-chainlinked-project?parent=ccip",
        },
        {
          title: "Bridges and Associated Risks",
          url: "resources/bridge-risks?parent=ccip",
        },
        {
          title: "Chainlink Architecture",
          url: "architecture-overview/architecture-overview?parent=ccip",
          children: [
            {
              title: "Basic Request Model",
              url: "architecture-overview/architecture-request-model?parent=ccip",
            },
            {
              title: "Decentralized Data Model",
              url: "architecture-overview/architecture-decentralized-model?parent=ccip",
            },
            {
              title: "Off-Chain Reporting",
              url: "architecture-overview/off-chain-reporting?parent=ccip",
            },
          ],
        },
        {
          title: "Developer Communications",
          url: "resources/developer-communications?parent=ccip",
          children: [
            { title: "Getting Help", url: "resources/getting-help?parent=ccip" },
            { title: "Hackathon Resources", url: "resources/hackathon-resources?parent=ccip" },
          ],
        },
        {
          title: "Contributing to Chainlink",
          url: "resources/contributing-to-chainlink?parent=ccip",
        },
      ],
    },
  ],
  nodeOperator: [
    {
      section: "Chainlink Nodes",
      contents: [
        {
          title: "Overview",
          url: "chainlink-nodes",
        },
        {
          title: "Release Notes",
          url: "chainlink-nodes/node-versions",
        },
        {
          title: "Run a Chainlink Node",
          url: "chainlink-nodes/v1/running-a-chainlink-node",
        },
        {
          title: "Configuring Nodes",
          url: "chainlink-nodes/configuring-nodes",
          children: [
            {
              title: "Node Config (TOML)",
              url: "chainlink-nodes/v1/node-config",
            },
            {
              title: "Secrets Config (TOML)",
              url: "chainlink-nodes/v1/secrets-config",
            },
            {
              title: "Legacy Config (.env)",
              url: "chainlink-nodes/v1/configuration",
            },
          ],
        },
        {
          title: "Using Roles and Access Control",
          url: "chainlink-nodes/v1/roles-and-access",
        },
        {
          title: "System Requirements",
          url: "chainlink-nodes/resources/requirements",
        },
      ],
    },
    {
      section: "Guides",
      contents: [
        {
          title: "Fulfilling Requests",
          url: "chainlink-nodes/v1/fulfilling-requests",
        },
        {
          title: "Using Forwarder Contracts",
          url: "chainlink-nodes/v1/using-forwarder",
        },
        {
          title: "Running an Ethereum Client",
          url: "chainlink-nodes/resources/run-an-ethereum-client",
        },
        {
          title: "Connecting to a Remote Database",
          url: "chainlink-nodes/resources/connecting-to-a-remote-database",
        },
        {
          title: "Enabling HTTPS Connections",
          url: "chainlink-nodes/resources/enabling-https-connections",
        },
        {
          title: "Performing System Maintenance",
          url: "chainlink-nodes/resources/performing-system-maintenance",
        },
        {
          title: "Optimizing EVM Performance",
          url: "chainlink-nodes/resources/evm-performance-configuration",
        },
        {
          title: "Security and Operation Best Practices",
          url: "chainlink-nodes/resources/best-security-practices",
        },
        {
          title: "Best Practices for Nodes on AWS",
          url: "chainlink-nodes/resources/best-practices-aws",
        },
        { title: "Miscellaneous", url: "chainlink-nodes/resources/miscellaneous" },
      ],
    },
    {
      section: "Contract Reference",
      contents: [
        {
          title: "Operator",
          url: "chainlink-nodes/contracts/operator",
        },
        {
          title: "Operator Factory",
          url: "chainlink-nodes/contracts/operatorfactory",
        },
        {
          title: "Forwarder",
          url: "chainlink-nodes/contracts/forwarder",
        },
        {
          title: "Receiver",
          url: "chainlink-nodes/contracts/receiver",
        },
        {
          title: "Ownership",
          url: "chainlink-nodes/contracts/ownership",
        },
        {
          title: "Contract Addresses",
          url: "chainlink-nodes/contracts/addresses",
        },
      ],
    },
    {
      section: "Job and Task Reference",
      contents: [
        {
          title: "Migrating to v2 Jobs",
          url: "chainlink-nodes/oracle-jobs/migration-v1-v2",
        },
        {
          title: "Jobs",
          url: "chainlink-nodes/oracle-jobs/jobs",
          children: [
            {
              title: "Job Types",
              url: "chainlink-nodes/oracle-jobs/all-jobs",
            },
          ],
        },
        {
          url: "chainlink-nodes/oracle-jobs/tasks",
          title: "Tasks",
          children: [
            {
              title: "Task Types",
              url: "chainlink-nodes/oracle-jobs/all-tasks",
            },
          ],
        },
      ],
    },
    {
      section: "External Adapters",
      contents: [
        {
          title: "Introduction",
          url: "chainlink-nodes/external-adapters/external-adapters",
        },
        {
          title: "External Adapters in Solidity",
          url: "chainlink-nodes/external-adapters/contract-creators",
        },
        {
          title: "Building External Adapters",
          url: "chainlink-nodes/external-adapters/developers",
        },
        {
          title: "Bridges: Adding External Adapters to Nodes",
          url: "chainlink-nodes/external-adapters/node-operators",
        },
      ],
    },
    {
      section: "External Initiators",
      contents: [
        {
          title: "Introduction",
          url: "chainlink-nodes/external-initiators/external-initiators-introduction",
        },
        {
          title: "Building External Initiators",
          url: "chainlink-nodes/external-initiators/building-external-initiators",
        },
        {
          title: "Adding External Initiators to Nodes",
          url: "chainlink-nodes/external-initiators/external-initiators-in-nodes",
        },
      ],
    },
    {
      section: "Connect to Any API",
      contents: [
        {
          title: "Overview",
          url: "any-api/introduction",
        },
        {
          title: "Getting Started",
          url: "any-api/getting-started",
        },
        {
          title: "Make a GET Request",
          url: "any-api/get-request/introduction",
          children: [
            {
              title: "Single Word Response",
              url: "any-api/get-request/examples/single-word-response",
            },
            {
              title: "Multi-Variable Responses",
              url: "any-api/get-request/examples/multi-variable-responses",
            },
            {
              title: "Array Response",
              url: "any-api/get-request/examples/array-response",
            },
            {
              title: "Large Responses",
              url: "any-api/get-request/examples/large-responses",
            },
            {
              title: "Existing Job Request",
              url: "any-api/get-request/examples/existing-job-request",
            },
          ],
        },
        {
          title: "Find Existing Jobs",
          url: "any-api/find-oracle",
        },
        {
          title: "Testnet Oracles",
          url: "any-api/testnet-oracles",
        },
        {
          title: "API Reference",
          url: "any-api/api-reference",
        },
      ],
    },
  ],
  global: [
    {
      section: "General Documentation",
      contents: [
        {
          title: "Learning Resources",
          url: "getting-started/other-tutorials",
        },
        {
          title: "Smart Contract Overview",
          url: "getting-started/conceptual-overview",
        },
        {
          title: "LINK Token Contracts",
          url: "resources/link-token-contracts",
          children: [
            {
              title: "Acquire testnet LINK",
              url: "resources/acquire-link",
            },
            {
              title: "Fund Your Contracts",
              url: "resources/fund-your-contract",
            },
          ],
        },
        {
          title: "Starter Kits and Frameworks",
          url: "resources/create-a-chainlinked-project",
        },
        {
          title: "Bridges and Associated Risks",
          url: "resources/bridge-risks",
        },
        {
          title: "Chainlink Architecture",
          url: "architecture-overview/architecture-overview",
          children: [
            {
              title: "Basic Request Model",
              url: "architecture-overview/architecture-request-model",
            },
            {
              title: "Decentralized Data Model",
              url: "architecture-overview/architecture-decentralized-model",
            },
            {
              title: "Off-Chain Reporting",
              url: "architecture-overview/off-chain-reporting",
            },
          ],
        },
        {
          title: "Developer Communications",
          url: "resources/developer-communications",
          children: [
            { title: "Getting Help", url: "resources/getting-help" },
            { title: "Hackathon Resources", url: "resources/hackathon-resources" },
          ],
        },
        {
          title: "Contributing to Chainlink",
          url: "resources/contributing-to-chainlink",
        },
      ],
    },
  ],
  legacy: [
    {
      section: "VRF v1 [DEPRECATED]",
      contents: [
        { title: "Introduction to Chainlink VRF", url: "vrf/v1/introduction" },
        {
          title: "Get a Random Number",
          url: "vrf/v1/examples/get-a-random-number",
        },
        { title: "Security Considerations", url: "vrf/v1/security" },
        { title: "Best Practices", url: "vrf/v1/best-practices" },
        { title: "Supported Networks", url: "vrf/v1/supported-networks" },
        { title: "API Reference", url: "vrf/v1/api-reference" },
      ],
    },
    {
      section: "v1 JSON Jobs [REMOVED]",
      contents: [
        {
          title: "Job Specifications",
          url: "chainlink-nodes/oracle-jobs/v1/job-specifications",
        },
        {
          title: "Core Adapters",
          url: "chainlink-nodes/oracle-jobs/v1/adapters",
        },
        {
          title: "Initiators",
          url: "chainlink-nodes/oracle-jobs/v1/initiators",
        },
      ],
    },
  ],
}
