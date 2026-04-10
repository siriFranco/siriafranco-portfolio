#!/bin/bash

echo "🚀 Creating Angular architecture..."

# Core & Shared
ng g module core
ng g module shared

# Feature: Portfolio
ng g module features/portfolio --routing

# Pages
ng g component features/portfolio/pages/portfolio

# Components
ng g component features/portfolio/components/project-card
ng g component features/portfolio/components/filter-bar

# Services
ng g service features/portfolio/services/project

# Extra feature folders (optional)
mkdir -p src/app/features/portfolio/models

# Create model file
touch src/app/features/portfolio/models/project.model.ts

echo "✅ Architecture created successfully!"