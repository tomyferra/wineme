import http from "../http-common";

class WineDataService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/${id}`);
  }

  create(data) {
    return http.post("/", data);
  }

  update(id, data) {
    return http.put(`/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/delete`);
  }

  findByTitle(title) {
    return http.get(`/wine?title=${title}`);
  }

  updatePart(id, field) {
    return http.patch(`/updatepart/${id}`, field);
  }
}

export default new WineDataService();