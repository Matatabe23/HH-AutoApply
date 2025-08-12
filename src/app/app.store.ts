import { defineStore } from 'pinia';
import { EXCHANGES, type IExchanges, type IUnifiedTicker } from '@/shared';

export const useAppStore = defineStore('app', {
	state: () => ({
		exchangeRates: {} as Record<string, IUnifiedTicker[]>
	}),

	actions: {
		async fetchExchangeRates() {
			for (const ex of EXCHANGES as IExchanges[]) {
				try {
					const result = await ex.func();
					this.exchangeRates[ex.name] = result;
				} catch (e) {
					console.error(`Ошибка при загрузке курсов ${ex.name}:`, e);
				}
			}
		}
	}
});
