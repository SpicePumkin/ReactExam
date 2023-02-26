import axios from 'axios';

const BASE_URL = 'http://localhost:5024/houses';

const HouseService = {
  async getAll(): Promise<HouseModel[]> {
    const response = await axios.get(BASE_URL);
    return response.data;
  },

  async getById(id: string): Promise<HouseModel> {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  },

  async create(house: Omit<HouseModel, 'id'>): Promise<HouseModel> {
    const response = await axios.post(BASE_URL, house);
    return response.data;
  },

  async update(house: HouseModel): Promise<HouseModel> {
    const response = await axios.put(`${BASE_URL}/${house.id}`, house);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await axios.delete(`${BASE_URL}/${id}`);
  },
};

export default HouseService;
