import { API } from './API';
import { SevereAlertsResponse } from '../types';

class Weatherbit extends API {

  private key: string = '47b4b166bf68465eb7c4695bd5f4e6f5'

  constructor() {
    super('http://api.weatherbit.io/v2.0');
  }

  /**
   * Get the severe weather alerts based on provided location
   * @param city - the name of the city. Example: 'New York City'
   * @param state - abbreviation of the state: Example: 'NY'
   * @returns
   */
  public severeAlerts = async (city: string, state: string): Promise<SevereAlertsResponse> => {
    const { data } = await this.Axios!.get(`/alerts?key=${this.key}&city=${city},${state}`);
    return data as SevereAlertsResponse;
  }
}

export { Weatherbit }
