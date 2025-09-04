# Barricôr Ateliê - Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for transitioning the Barricôr Ateliê ceramic portfolio from mock data to a full backend implementation.

## Current Mock Data Structure

### 1. Ceramic Pieces Collection
**Mock Data:** `ceramicPieces` array in `/app/frontend/src/components/mockData.js`

**Database Model:** `CeramicPiece`
```javascript
{
  id: String (MongoDB ObjectId),
  title: String,
  description: String, 
  category: String, // "Pratos", "Tigelas", "Xícaras", "Decoração"
  price: String, // "R$ 85,00" format
  image: String, // URL to image
  featured: Boolean,
  available: Boolean, // For inventory management
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Categories
**Mock Data:** `categories` array
**Implementation:** Static array or database collection for dynamic management

### 3. Artist Information
**Mock Data:** `artistInfo` object
**Implementation:** Single document in MongoDB or environment variables

### 4. Testimonials
**Mock Data:** `testimonials` array
**Database Model:** `Testimonial`
```javascript
{
  id: String,
  name: String,
  location: String,
  text: String,
  rating: Number,
  approved: Boolean, // For moderation
  createdAt: Date
}
```

## Required API Endpoints

### Ceramic Pieces Endpoints
- `GET /api/pieces` - Get all ceramic pieces with optional category filter
- `GET /api/pieces/:id` - Get specific piece details
- `POST /api/pieces` - Create new piece (admin only)
- `PUT /api/pieces/:id` - Update piece (admin only)
- `DELETE /api/pieces/:id` - Delete piece (admin only)

### Categories Endpoints
- `GET /api/categories` - Get all categories

### Testimonials Endpoints
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/testimonials` - Submit new testimonial

### Contact Endpoints
- `POST /api/contact` - Handle contact form submissions (log to database)

## Frontend Integration Changes

### Files to Modify:
1. **Portfolio.jsx** - Replace mock data with API calls
2. **Contact.jsx** - Add form submission to backend
3. **mockData.js** - Remove mock data, replace with API service functions

### API Service Layer
Create `/app/frontend/src/services/api.js`:
```javascript
// API service functions for backend communication
export const ceramicService = {
  getAllPieces: () => axios.get(`${API}/pieces`),
  getPieceById: (id) => axios.get(`${API}/pieces/${id}`),
  getPiecesByCategory: (category) => axios.get(`${API}/pieces?category=${category}`)
};

export const testimonialService = {
  getTestimonials: () => axios.get(`${API}/testimonials`)
};

export const contactService = {
  submitContact: (data) => axios.post(`${API}/contact`, data)
};
```

## Database Schema

### Collections Needed:
1. **ceramic_pieces** - Main product catalog
2. **testimonials** - Customer reviews
3. **contact_submissions** - Contact form data
4. **categories** - Product categories (optional)

## Backend Implementation Priority

### Phase 1: Core Functionality
1. MongoDB connection and models
2. Basic CRUD for ceramic pieces
3. Categories endpoint
4. Testimonials display

### Phase 2: Enhanced Features
1. Contact form handling
2. Image upload/management
3. Admin authentication
4. Inventory management

### Phase 3: Advanced Features  
1. Search functionality
2. Testimonial submission/moderation
3. Analytics and insights
4. Email notifications

## WhatsApp Integration
- **Current:** Direct links to WhatsApp with pre-filled messages
- **Backend Enhancement:** Log WhatsApp inquiries for analytics
- **No Changes Required:** WhatsApp functionality works perfectly with current implementation

## Image Management
- **Current:** Direct URLs to customer assets
- **Backend:** Store image URLs in database, optionally implement file upload
- **Enhancement:** Add multiple images per piece, image optimization

## Performance Considerations
- Implement pagination for large catalogs
- Cache frequently accessed data
- Optimize image loading
- Add search indices

## Error Handling
- Graceful fallbacks when API fails
- Loading states for better UX
- Proper error messages in Portuguese

## Testing Requirements
- Test all CRUD operations
- Test form submissions
- Test WhatsApp link generation
- Test responsive design
- Test category filtering
- Test piece detail modals

This contract ensures seamless integration between the beautiful frontend we've created and a robust backend system that will support Lucas's growing ceramic business.