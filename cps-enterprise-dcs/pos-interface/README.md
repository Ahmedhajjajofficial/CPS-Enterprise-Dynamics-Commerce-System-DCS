# RockDeals POS Interface

**CP'S Enterprise Dynamics Commerce System (DCS)**

The RockDeals POS (Point of Sale) is a high-performance, offline-capable commerce interface designed for retail sovereignty.

## Features

- **Product Management**: Real-time product grid with category filtering.
- **Cart & Checkout**: Advanced shopping cart with multi-currency support and real-time tax calculation.
- **Offline Operations**: Continue trading during network isolation with automatic background synchronization.
- **Security**: Envelope encryption for all financial transactions.
- **Integrations**: Direct communication with DCS Local Agent via gRPC-Web.

## Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **API**: gRPC / Protocol Buffers
- **Build Tool**: Vite

## Development

### Prerequisites

- Node.js 18+
- DCS Local Agent (running on localhost:50051)

### Setup

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

## Security

All transactions are signed by the cashier agent and encrypted before being sent to the local event store.

---
**CP'S Enterprise DCS**
*Built with Logic of Sovereignty, Not Dependency*
