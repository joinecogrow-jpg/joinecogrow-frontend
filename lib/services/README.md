# Integrated Workflow Services

This directory contains the core services that integrate V0, Cursor, and Supabase for the JoinEcoGrow Platform.

## Services

### IntegratedWorkflow
Main orchestrator service that coordinates the entire workflow:
- V0 component generation
- Cursor refinement with Supabase context
- Vercel deployment
- Monitoring integration

### V0Service
Handles V0 component generation:
- API integration with V0
- Mock fallback for development
- Error handling and retries

### CursorRefinement
Applies Cursor-specific enhancements:
- Brand color application
- TypeScript type additions
- Error boundary integration
- Loading state management
- Accessibility improvements
- Performance optimizations

## Environment Variables

Add these to your `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
V0_API_KEY=your_v0_api_key
```

## Usage

```typescript
import { IntegratedWorkflow } from '@/lib/services/integrated-workflow';

const workflow = new IntegratedWorkflow();
const result = await workflow.v0ToCursorToSupabase('Create a user dashboard component');
```

## API Endpoints

- `POST /api/v0/generate` - Generate and refine components
