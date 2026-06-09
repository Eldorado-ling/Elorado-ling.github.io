---
title: 数据看板
date: 2026-06-09 12:00:00
type: page
layout: page
chartjs: true
---

<style>
.metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.metric-card { background: var(--card-bg, rgba(255,255,255,.9)); border-radius: 12px; padding: 1.5rem; text-align: center; border-left: 4px solid #49B1F5; }
.metric-card.green { border-left-color: #00c4b6; }
.metric-card.orange { border-left-color: #FF7242; }
.metric-card.purple { border-left-color: #a855f7; }
.metric-value { font-size: 2rem; font-weight: 700; color: var(--font-color, #333); }
.metric-label { font-size: 0.85rem; color: var(--meta-color, #858585); margin-top: 0.3rem; }
.metric-sub { font-size: 0.75rem; color: #00c4b6; margin-top: 0.2rem; }
</style>

## 关键指标

<div class="metrics-grid">
  <div class="metric-card">
    <div class="metric-value">¥112,100</div>
    <div class="metric-label">累计营收（2026）</div>
    <div class="metric-sub">↑ 月均 ¥18,683</div>
  </div>
  <div class="metric-card green">
    <div class="metric-value">4.23%</div>
    <div class="metric-label">平均转化率</div>
    <div class="metric-sub">↑ 较年初 +1.4pp</div>
  </div>
  <div class="metric-card orange">
    <div class="metric-value">732</div>
    <div class="metric-label">累计客户</div>
    <div class="metric-sub">↑ 月均 122</div>
  </div>
  <div class="metric-card purple">
    <div class="metric-value">¥24,800</div>
    <div class="metric-label">最高单月营收</div>
    <div class="metric-sub">2026 年 5 月</div>
  </div>
</div>

---

## 月度营收趋势

{% chartjs 100, false, revenue-line %}
<!-- chart -->
{
  "type": "line",
  "data": {
    "labels": ["01", "02", "03", "04", "05", "06"],
    "datasets": [{
      "label": "营收 (¥)",
      "data": [12500, 18200, 15600, 21300, 24800, 19700],
      "borderColor": "#49B1F5",
      "backgroundColor": "rgba(73, 177, 245, 0.1)",
      "fill": true,
      "tension": 0.4,
      "pointBackgroundColor": "#49B1F5",
      "pointBorderColor": "#fff",
      "pointRadius": 5,
      "pointHoverRadius": 7
    }]
  },
  "options": {
    "responsive": true,
    "maintainAspectRatio": true,
    "plugins": {
      "legend": { "display": false }
    },
    "scales": {
      "y": {
        "beginAtZero": false,
        "ticks": {
          "callback": "function(v){return '¥'+v.toLocaleString()}"
        }
      }
    }
  }
}
<!-- endchart -->
{% endchartjs %}

---

## 月度转化率

{% chartjs 100, false, conversion-line %}
<!-- chart -->
{
  "type": "line",
  "data": {
    "labels": ["01", "02", "03", "04", "05", "06"],
    "datasets": [{
      "label": "转化率 (%)",
      "data": [3.2, 4.1, 3.5, 4.8, 5.2, 4.6],
      "borderColor": "#00c4b6",
      "backgroundColor": "rgba(0, 196, 182, 0.1)",
      "fill": true,
      "tension": 0.4,
      "pointBackgroundColor": "#00c4b6",
      "pointBorderColor": "#fff",
      "pointRadius": 5,
      "pointHoverRadius": 7
    }]
  },
  "options": {
    "responsive": true,
    "maintainAspectRatio": true,
    "plugins": {
      "legend": { "display": false }
    },
    "scales": {
      "y": {
        "beginAtZero": false,
        "ticks": {
          "callback": "function(v){return v+'%'}"
        }
      }
    }
  }
}
<!-- endchart -->
{% endchartjs %}

---

## 客户增长

{% chartjs 100, false, customer-bar %}
<!-- chart -->
{
  "type": "bar",
  "data": {
    "labels": ["01", "02", "03", "04", "05", "06"],
    "datasets": [{
      "label": "客户数",
      "data": [85, 112, 98, 135, 160, 142],
      "backgroundColor": "rgba(73, 177, 245, 0.7)",
      "borderColor": "#49B1F5",
      "borderWidth": 1,
      "borderRadius": 4
    }]
  },
  "options": {
    "responsive": true,
    "maintainAspectRatio": true,
    "plugins": {
      "legend": { "display": false }
    },
    "scales": {
      "y": {
        "beginAtZero": true
      }
    }
  }
}
<!-- endchart -->
{% endchartjs %}

---

## 营收构成

{% chartjs 60, false, revenue-pie %}
<!-- chart -->
{
  "type": "doughnut",
  "data": {
    "labels": ["产品 A", "产品 B", "咨询服务", "其他"],
    "datasets": [{
      "data": [42000, 35000, 21000, 14100],
      "backgroundColor": ["#49B1F5", "#FF7242", "#00c4b6", "#99a9bf"],
      "borderWidth": 0
    }]
  },
  "options": {
    "responsive": true,
    "plugins": {
      "legend": {
        "position": "bottom"
      }
    }
  }
}
<!-- endchart -->
{% endchartjs %}

---

> 数据更新时间：2026 年 6 月 | 以上数据均为公开展示，如有疑问请联系 kickningmeri1971@gmail.com
