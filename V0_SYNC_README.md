# V0 Sync Script - JoinEcoGrow Platform

## 🚀 Overview

The V0 Sync Script (`scripts/sync-v0.js`) is a comprehensive tool for synchronizing V0-generated components with your JoinEcoGrow Platform. It automatically processes components, maintains a registry, generates TypeScript types, and provides real-time file watching.

## ✨ Features

### 🔄 **Automatic Component Processing**
- Scans for new/updated components
- Validates component structure
- Extracts metadata (name, props, description)
- Updates component registry

### 📋 **Component Registry**
- Maintains JSON registry of all components
- Tracks component metadata
- Supports cleanup of removed components
- Auto-generates TypeScript types

### 👀 **File Watching**
- Real-time monitoring of component changes
- Automatic processing on file modifications
- Debounced operations for performance

### 🧪 **Testing Integration**
- Runs component tests after sync
- Validates component structure
- Provides detailed logging

## 📁 Generated Files

```
lib/
├── component-registry.json          # Component metadata registry
types/generated/
├── components.ts                    # Auto-generated TypeScript types
.v0-sync.log                        # Sync operation logs
```

## 🛠 Usage

### Basic Commands

```bash
# Full sync (default)
npm run sync:v0

# Watch mode (continuous monitoring)
npm run sync:v0:watch

# Update registry only
npm run sync:v0:registry

# Generate types only
npm run sync:v0:types

# Cleanup removed components
npm run sync:v0:cleanup
```

### Advanced Usage

```bash
# Direct script execution
node scripts/sync-v0.js [command]

# Available commands:
# - (no command): Full sync
# - watch: Start file watcher
# - cleanup: Clean registry
# - registry: Update registry
# - types: Generate types
```

## 📊 Component Registry Structure

```typescript
interface ComponentMetadata {
  name: string;                    // Component name
  fileName: string;                // File name
  propsInterface?: string;         // Props interface name
  description: string;             // Component description
  filePath: string;                // Directory path
  createdAt: string;               // Creation timestamp
  lastModified: string;            // Last modification timestamp
}

interface ComponentRegistry {
  [componentName: string]: ComponentMetadata;
}
```

## 🔍 Component Validation

The script validates components for:

- ✅ **React Import**: Ensures `import React` is present
- ✅ **Export Statement**: Checks for `export default` or `export {}`
- ✅ **TypeScript Types**: Warns if props interface is missing
- ✅ **File Structure**: Validates component structure

## 📝 Logging

All operations are logged with timestamps:

```
[2025-10-17T23:12:12.822Z] 🚀 Starting V0 sync process...
[2025-10-17T23:12:12.824Z] 🔍 Checking for V0 changes...
[2025-10-17T23:12:12.905Z] 📝 Found 2 changes:
[2025-10-17T23:12:12.906Z]    M package.json
[2025-10-17T23:12:12.906Z]    ?? scripts/sync-v0.js
```

## 🎯 Integration with V0 Workflow

### 1. **V0 Generates Component**
```bash
# V0 creates new component
npx shadcn@latest add button
```

### 2. **Sync Script Processes Component**
```bash
# Automatically processes new component
npm run sync:v0
```

### 3. **Registry Updated**
```json
{
  "Button": {
    "name": "Button",
    "fileName": "button.tsx",
    "propsInterface": "ButtonProps",
    "description": "Reusable button component",
    "filePath": "components/ui",
    "createdAt": "2025-10-17T23:12:12.968Z",
    "lastModified": "2025-10-17T23:12:12.968Z"
  }
}
```

### 4. **TypeScript Types Generated**
```typescript
export interface ComponentRegistry {
  Button: ComponentMetadata;
  Card: ComponentMetadata;
  // ... other components
}
```

## 🔧 Configuration

### Directory Structure
```
components/
├── ui/                    # shadcn/ui components
├── generated/             # V0-generated components
└── *.tsx                 # Custom components

types/generated/
└── components.ts         # Auto-generated types

lib/
└── component-registry.json # Component registry
```

### Customization

You can modify the script to:
- Change validation rules
- Add custom metadata extraction
- Integrate with external APIs
- Customize logging format

## 🚨 Error Handling

The script handles errors gracefully:
- ⚠️ **Git Pull Failures**: Continues sync despite git issues
- ⚠️ **Component Validation**: Logs errors but continues processing
- ⚠️ **Test Failures**: Reports but doesn't stop sync
- ⚠️ **File System Errors**: Creates directories as needed

## 🔄 Continuous Integration

### GitHub Actions Integration
```yaml
name: V0 Sync
on:
  push:
    branches: [main]
    paths: ['components/**']

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Run V0 Sync
        run: npm run sync:v0
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add lib/component-registry.json types/generated/
          git commit -m "Update component registry" || exit 0
          git push
```

## 🎨 JoinEcoGrow Integration

The script is optimized for JoinEcoGrow Platform:
- 🎨 **Brand Colors**: Supports custom color schemes
- 🌱 **Eco-Friendly**: Optimized for sustainability features
- 🔧 **TypeScript**: Full TypeScript support
- 📱 **Responsive**: Mobile-first component validation

## 📈 Performance

- ⚡ **Fast Processing**: Optimized file scanning
- 🔄 **Debounced Operations**: Prevents excessive processing
- 💾 **Efficient Storage**: JSON-based registry
- 🧹 **Automatic Cleanup**: Removes stale entries

## 🛡 Security

- 🔒 **Safe Operations**: Read-only file operations
- 🧪 **Validation**: Component structure validation
- 📝 **Logging**: Complete operation audit trail
- 🔄 **Rollback**: Git-based change tracking

---

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Initial Sync**
   ```bash
   npm run sync:v0
   ```

3. **Start Watching**
   ```bash
   npm run sync:v0:watch
   ```

4. **Generate Components**
   ```bash
   npx shadcn@latest add [component-name]
   ```

Your components will be automatically processed and registered! 🌱

---

**Built for JoinEcoGrow Platform** - Sustainable development with AI-powered efficiency.
