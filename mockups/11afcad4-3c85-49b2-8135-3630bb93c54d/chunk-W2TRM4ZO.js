import {
  environment
} from "./chunk-QKG44OY5.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LGQVWVXM.js";

// src/app/core/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiUrl;
  }
  // ---- Users ----
  me() {
    return this.http.get(`${this.base}/users/me`);
  }
  // ---- Courses (public reads, instructor writes) ----
  listCourses() {
    return this.http.get(`${this.base}/courses`);
  }
  getCourse(id) {
    return this.http.get(`${this.base}/courses/${id}`);
  }
  createCourse(body) {
    return this.http.post(`${this.base}/courses`, body);
  }
  updateCourse(id, body) {
    return this.http.patch(`${this.base}/courses/${id}`, body);
  }
  deleteCourse(id) {
    return this.http.delete(`${this.base}/courses/${id}`);
  }
  // ---- Modules (instructor) ----
  createModule(courseId, body) {
    return this.http.post(`${this.base}/courses/${courseId}/modules`, body);
  }
  updateModule(id, body) {
    return this.http.patch(`${this.base}/modules/${id}`, body);
  }
  deleteModule(id) {
    return this.http.delete(`${this.base}/modules/${id}`);
  }
  // ---- Lessons ----
  getLesson(id) {
    return this.http.get(`${this.base}/lessons/${id}`);
  }
  viewLesson(id) {
    return this.http.post(`${this.base}/lessons/${id}/view`, {});
  }
  createLesson(moduleId, body) {
    return this.http.post(`${this.base}/modules/${moduleId}/lessons`, body);
  }
  updateLesson(id, body) {
    return this.http.patch(`${this.base}/lessons/${id}`, body);
  }
  deleteLesson(id) {
    return this.http.delete(`${this.base}/lessons/${id}`);
  }
  // ---- Learning: enroll, my-courses, progress ----
  enroll(courseId) {
    return this.http.post(`${this.base}/courses/${courseId}/enroll`, {});
  }
  myCourses() {
    return this.http.get(`${this.base}/enrollments/mine`);
  }
  getProgress(courseId) {
    return this.http.get(`${this.base}/courses/${courseId}/progress`);
  }
  // ---- Quizzes ----
  getQuiz(id) {
    return this.http.get(`${this.base}/quizzes/${id}`);
  }
  submitAttempt(id, answers) {
    return this.http.post(`${this.base}/quizzes/${id}/attempt`, { answers });
  }
  createQuiz(moduleId, body) {
    return this.http.post(`${this.base}/modules/${moduleId}/quizzes`, body);
  }
  updateQuiz(id, body) {
    return this.http.patch(`${this.base}/quizzes/${id}`, body);
  }
  deleteQuiz(id) {
    return this.http.delete(`${this.base}/quizzes/${id}`);
  }
  // ---- Questions (instructor) ----
  createQuestion(quizId, body) {
    return this.http.post(`${this.base}/quizzes/${quizId}/questions`, body);
  }
  updateQuestion(id, body) {
    return this.http.patch(`${this.base}/questions/${id}`, body);
  }
  deleteQuestion(id) {
    return this.http.delete(`${this.base}/questions/${id}`);
  }
  // ---- Gradebook (instructor) ----
  getGradebook(courseId) {
    return this.http.get(`${this.base}/courses/${courseId}/gradebook`);
  }
  // ---- Admin settings ----
  getSettings() {
    return this.http.get(`${this.base}/admin/settings`);
  }
  updateSettings(payload) {
    return this.http.patch(`${this.base}/admin/settings`, payload);
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  ApiService
};
//# sourceMappingURL=chunk-W2TRM4ZO.js.map
