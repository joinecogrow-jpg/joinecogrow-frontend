// app/api/features/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { 
  getFeatures, 
  createFeature, 
  getFeaturesByCategory,
  searchFeatures 
} from '@/lib/queries/features';

// GET /api/features - Get all features with optional filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let result;

    if (search) {
      // Search features
      result = await searchFeatures(search);
    } else if (category && category !== 'all') {
      // Get features by category
      result = await getFeaturesByCategory(category);
    } else {
      // Get all features with pagination
      result = await getFeatures(page, limit);
    }

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      count: (result as any).count || result.data?.length || 0,
      page,
      limit
    });

  } catch (error) {
    console.error('Features API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/features - Create new feature
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.category || !body.description) {
      return NextResponse.json(
        { error: 'Missing required fields: name, category, description' },
        { status: 400 }
      );
    }

    const featureData = {
      name: body.name,
      category: body.category,
      description: body.description,
      component_id: body.component_id || null,
      is_active: body.is_active !== undefined ? body.is_active : true
    };

    const result = await createFeature(featureData);

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data
    }, { status: 201 });

  } catch (error) {
    console.error('Create feature error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
