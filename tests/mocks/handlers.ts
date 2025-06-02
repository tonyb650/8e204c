import { http, HttpResponse } from "msw";
import { data } from "./data";

export const handlers = [

  http.get('/api/v1/id/actions/blueprints/id/graph', () => {
    return HttpResponse.json(data)
  }),

]