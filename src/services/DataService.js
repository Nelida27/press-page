import http from "../http-common";
class DataService {
  getAllUsers() {
    return http.get(`/users`);
  }
}
export default new DataService();
