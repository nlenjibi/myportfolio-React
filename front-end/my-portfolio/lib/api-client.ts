// API client utility for making authenticated requests to Django backend

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

interface RequestOptions extends RequestInit {
  requiresAuth?: boolean
}

async function refreshAccessToken() {
  const refresh = localStorage.getItem("refresh")
  if (!refresh) {
    throw new Error("No refresh token available")
  }

  const response = await fetch(`${API_URL}/api/auth/token/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh }),
  })

  if (!response.ok) {
    throw new Error("Token refresh failed")
  }

  const data = await response.json()
  localStorage.setItem("token", data.access)
  return data.access
}

export async function apiRequest<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { requiresAuth = true, ...fetchOptions } = options

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...fetchOptions.headers,
  }

  // Add authentication token for protected endpoints
  if (requiresAuth) {
    const token = localStorage.getItem("token")
    if (token) {
      headers["Authorization"] = `Token ${token}`
    }
  }

  let response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  })

  // If unauthorized, redirect to login (no refresh for Token auth)
  if (response.status === 401 && requiresAuth) {
    localStorage.clear()
    window.location.href = "/admin/login"
    throw new Error("Unauthorized")
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: "An error occurred" }))
    throw new Error(error.detail || "Request failed")
  }

  return response.json()
}

// API methods for each module
export const api = {
  // Auth
  login: (username: string, password: string) =>
    apiRequest("/api/auth/login/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      requiresAuth: false,
    }),

  // Intro
  getIntro: () => apiRequest("/api/intro/", { requiresAuth: false }),
  updateIntro: (data: any) =>
    apiRequest("/api/intro/", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  // About
  getAbout: () => apiRequest("/api/about/", { requiresAuth: false }),
  updateAbout: (data: any) =>
    apiRequest("/api/about/", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  // Skills
  getSkills: () => apiRequest("/api/skills/", { requiresAuth: false }),
  createSkill: (data: any) =>
    apiRequest("/api/skills/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateSkill: (id: number, data: any) =>
    apiRequest(`/api/skills/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteSkill: (id: number) =>
    apiRequest(`/api/skills/${id}/`, {
      method: "DELETE",
    }),

  // Resume
  getResume: () => apiRequest("/api/resume/", { requiresAuth: false }),
  updateResume: (data: any) =>
    apiRequest("/api/resume/", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  // Education
  getEducation: () => apiRequest("/api/education/", { requiresAuth: false }),
  createEducation: (data: any) =>
    apiRequest("/api/education/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateEducation: (id: number, data: any) =>
    apiRequest(`/api/education/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteEducation: (id: number) =>
    apiRequest(`/api/education/${id}/`, {
      method: "DELETE",
    }),

  // Experience
  getExperience: () => apiRequest("/api/experience/", { requiresAuth: false }),
  createExperience: (data: any) =>
    apiRequest("/api/experience/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateExperience: (id: number, data: any) =>
    apiRequest(`/api/experience/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteExperience: (id: number) =>
    apiRequest(`/api/experience/${id}/`, {
      method: "DELETE",
    }),

  // Portfolio
  getPortfolio: () => apiRequest("/api/portfolio/", { requiresAuth: false }),
  createPortfolio: (data: any) =>
    apiRequest("/api/portfolio/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updatePortfolio: (id: number, data: any) =>
    apiRequest(`/api/portfolio/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deletePortfolio: (id: number) =>
    apiRequest(`/api/portfolio/${id}/`, {
      method: "DELETE",
    }),

  // Services
  getServices: () => apiRequest("/api/services/", { requiresAuth: false }),
  createService: (data: any) =>
    apiRequest("/api/services/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateService: (id: number, data: any) =>
    apiRequest(`/api/services/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteService: (id: number) =>
    apiRequest(`/api/services/${id}/`, {
      method: "DELETE",
    }),

  // Testimonials
  getTestimonials: () => apiRequest("/api/testimonials/", { requiresAuth: false }),
  createTestimonial: (data: any) =>
    apiRequest("/api/testimonials/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateTestimonial: (id: number, data: any) =>
    apiRequest(`/api/testimonials/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteTestimonial: (id: number) =>
    apiRequest(`/api/testimonials/${id}/`, {
      method: "DELETE",
    }),

  // Interests
  getInterests: () => apiRequest("/api/interests/", { requiresAuth: false }),
  createInterest: (data: any) =>
    apiRequest("/api/interests/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateInterest: (id: number, data: any) =>
    apiRequest(`/api/interests/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteInterest: (id: number) =>
    apiRequest(`/api/interests/${id}/`, {
      method: "DELETE",
    }),

  // Contact
  getContactMessages: () => apiRequest("/api/contact/"),
  submitContactForm: (data: any) =>
    apiRequest("/api/contact/", {
      method: "POST",
      body: JSON.stringify(data),
      requiresAuth: false,
    }),
  deleteContactMessage: (id: number) =>
    apiRequest(`/api/contact/${id}/`, {
      method: "DELETE",
    }),
}
