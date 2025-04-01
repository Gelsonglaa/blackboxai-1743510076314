/**
 * TechAngola - Sistema de Navegação
 * Configura todos os elementos interativos da plataforma
 * com identidade visual angolana
 */

class NavigationManager {
  constructor() {
    this.solutions = [
      {id: 'cloudtech', name: 'Soluções em Nuvem'},
      {id: 'securenet', name: 'Segurança Digital'}, 
      {id: 'datainsight', name: 'Análise de Dados'}
    ];
  }

  init() {
    this.setupCategoryCards();
    this.setupDetailButtons();
  }

  setupCategoryCards() {
    const categories = [
      {icon: '.bg-blue-100', page: 'apps.html', label: 'Aplicativos Angolanos'},
      {icon: '.bg-green-100', page: 'tools.html', label: 'Ferramentas Locais'},
      {icon: '.bg-purple-100', page: 'solutions.html', label: 'Soluções Nacionais'},
      {icon: '.bg-orange-100', page: 'suppliers.html', label: 'Fornecedores Angolanos'}
    ];

    categories.forEach(cat => {
      const card = document.querySelector(`${cat.icon} + h3`)?.closest('div');
      if (card) {
        card.style.cursor = 'pointer';
        card.onclick = () => window.location.href = cat.page;
      }
    });
  }

  setupDetailButtons() {
    document.querySelectorAll('button:has(+ span.text-gray-500)')
      .forEach((btn, i) => {
        if (this.solutions[i]) {
          btn.onclick = () => window.location.href = 
            `solution-detail.html?id=${this.solutions[i].id}`;
        }
      });
  }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new NavigationManager().init();
});