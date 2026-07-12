import{b as L,c as D,d as w,e as k,f as I,g as O,m as T}from"./chunk-YXEQD3DR.js";import{Ga as b,Ka as u,Kb as S,Lb as x,Pa as v,Qa as d,Ra as y,Ta as m,Wa as C,Xa as P,Ya as n,Za as a,_a as h,ab as g,fb as r,ka as l,pb as _,sb as M,ua as f,xa as s}from"./chunk-X4JJZVT5.js";var A=(i,t)=>t.id;function E(i,t){i&1&&(n(0,"span",12),r(1,"\u{1F916}"),a(),n(2,"span"),r(3,"Inventory Assistant"),a())}function J(i,t){i&1&&(n(0,"span",12),r(1,"\u{1F464}"),a(),n(2,"span"),r(3,"You"),a())}function R(i,t){if(i&1&&(n(0,"div",9)(1,"div",10),u(2,E,4,0)(3,J,4,0),a(),h(4,"div",11),_(5,"slice"),a()),i&2){let e=t.$implicit;y("chat-bubble-user",e.role==="user")("chat-bubble-assistant",e.role==="assistant"),v("data-testid","chat-msg-"+e.id),s(2),m(e.role==="assistant"?2:3),s(2),d("innerHTML",M(5,7,e.content,0,2e3),f)}}function N(i,t){i&1&&(n(0,"div",5)(1,"div",10)(2,"span",12),r(3,"\u{1F916}"),a(),n(4,"span"),r(5,"Inventory Assistant"),a()(),n(6,"div",13)(7,"span",14),h(8,"span")(9,"span")(10,"span"),a()()())}var F=class i{messages=l([{id:"1",role:"assistant",content:`Hello! I can help you find information about your inventory. Try asking questions like:

- "What products are low on stock?"
- "Show me all fuses from Littelfuse"
- "What's the lead time for IFS-LPJ-30SP?"`,timestamp:new Date}]);inputValue=l("");isLoading=l(!1);sendMessage(){let t=this.inputValue().trim();if(!t||this.isLoading())return;let e={id:Date.now().toString(),role:"user",content:t,timestamp:new Date};this.messages.update(o=>[...o,e]),this.inputValue.set(""),this.isLoading.set(!0),setTimeout(()=>{let o=this.getMockResponse(t),c={id:(Date.now()+1).toString(),role:"assistant",content:o,timestamp:new Date};this.messages.update(p=>[...p,c]),this.isLoading.set(!1)},800)}getMockResponse(t){let e=t.toLowerCase();return e.includes("low")&&e.includes("stock")?`Based on your current inventory, here are **5 products** with low stock (qty <= 10):

| Part # | Product | Qty | Lead Time |
|--------|---------|-----|----------|
| IFS-LPJ-30SP | Littelfuse LPJ-30SP Fuse | 3 | 5 days |
| IFS-FRS-20 | Bussmann FRS-20 Fuse | 7 | 7 days |
| IFS-CB-1P-20A | Square D 20A Breaker | 2 | 14 days |
| IFS-TB-6MM | Phoenix Contact Terminal | 8 | 3 days |
| IFS-MTR-1HP | WEG 1HP Motor | 1 | 21 days |

Would you like me to generate a reorder report?`:e.includes("littelfuse")?`Found **12 products** from Littelfuse in your inventory:

- LPJ Series: LPJ-15SP, LPJ-20SP, LPJ-30SP, LPJ-60SP
- JTD Series: JTD-30, JTD-60, JTD-100
- KLDR Series: KLDR-1, KLDR-3, KLDR-6, KLDR-10, KLDR-15

Total inventory value: **$24,350.00**
Average margin: **38.2%**`:e.includes("lead time")||e.includes("lpj-30sp")?`**IFS-LPJ-30SP** \u2014 Littelfuse LPJ-30SP Time-Delay Fuse

- **On hand:** 3 units
- **Lead time:** 5 days
- **Unit cost:** $8.50
- **Selling price:** $12.75
- **Margin:** 33.3%
- **Last ordered:** 2026-05-28

The typical reorder point for this item is 10 units based on sales velocity.`:`I searched your inventory for "${t}" but didn't find an exact match. Here are some things I can help with:

- Stock level queries ("what's low on stock?")
- Manufacturer lookups ("show me Littelfuse products")
- Part details ("lead time for IFS-LPJ-30SP")
- Margin analysis ("what products have the highest margin?")

Try rephrasing your question or ask for help with a specific part number.`}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-admin-inventory-chat"]],decls:15,vars:4,consts:[[1,"section-title"],["data-testid","chat-subtitle",1,"muted"],["data-testid","chat-container",1,"chat-container"],["data-testid","chat-messages",1,"chat-messages"],[1,"chat-bubble",3,"chat-bubble-user","chat-bubble-assistant"],["data-testid","chat-loading",1,"chat-bubble","chat-bubble-assistant","chat-loading"],["data-testid","chat-form",1,"chat-input-row",3,"ngSubmit"],["type","text","placeholder","Ask about inventory, stock levels, margins...","data-testid","chat-input","name","chatInput",1,"input","chat-input",3,"ngModelChange","ngModel","disabled"],["type","submit","data-testid","chat-send",1,"btn","btn-primary",3,"disabled"],[1,"chat-bubble"],[1,"chat-role"],[1,"chat-content",3,"innerHTML"],[1,"chat-avatar"],[1,"chat-content"],[1,"typing-indicator"]],template:function(e,o){e&1&&(n(0,"header",0)(1,"div")(2,"h1"),r(3,"Inventory Chat"),a(),n(4,"p",1),r(5," Ask questions about your products, stock levels & margins "),a()()(),n(6,"div",2)(7,"div",3),C(8,R,6,11,"div",4,A),u(10,N,11,0,"div",5),a(),n(11,"form",6),g("ngSubmit",function(){return o.sendMessage()}),n(12,"input",7),g("ngModelChange",function(p){return o.inputValue.set(p)}),a(),n(13,"button",8),r(14," Send "),a()()()),e&2&&(s(8),P(o.messages()),s(2),m(o.isLoading()?10:-1),s(2),d("ngModel",o.inputValue())("disabled",o.isLoading()),s(),d("disabled",o.isLoading()||!o.inputValue().trim()))},dependencies:[x,S,T,O,L,D,w,I,k],styles:[".chat-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:calc(100vh - var(--header-h) - 120px);min-height:400px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg);overflow:hidden}.chat-messages[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:var(--sp-5);display:flex;flex-direction:column;gap:var(--sp-4)}.chat-bubble[_ngcontent-%COMP%]{max-width:80%;padding:var(--sp-4);border-radius:var(--radius-lg);line-height:1.5}.chat-bubble-assistant[_ngcontent-%COMP%]{align-self:flex-start;background:var(--color-surface-alt);border:1px solid var(--color-border)}.chat-bubble-user[_ngcontent-%COMP%]{align-self:flex-end;background:var(--color-brand);color:var(--color-surface)}.chat-bubble-user[_ngcontent-%COMP%]   .chat-role[_ngcontent-%COMP%]{color:var(--color-surface);opacity:.85}.chat-role[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--sp-2);font-size:var(--fs-sm);font-weight:600;color:var(--color-muted);margin-bottom:var(--sp-2)}.chat-avatar[_ngcontent-%COMP%]{font-size:var(--fs-md)}.chat-content[_ngcontent-%COMP%]{font-size:var(--fs-base);white-space:pre-wrap;word-break:break-word}.chat-input-row[_ngcontent-%COMP%]{display:flex;gap:var(--sp-3);padding:var(--sp-4);border-top:1px solid var(--color-border);background:var(--color-surface-alt)}.chat-input[_ngcontent-%COMP%]{flex:1;font-size:16px}.typing-indicator[_ngcontent-%COMP%]{display:inline-flex;gap:4px}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:8px;height:8px;background:var(--color-muted);border-radius:50%;animation:_ngcontent-%COMP%_typing-dot 1.2s infinite ease-in-out}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){animation-delay:.4s}@keyframes _ngcontent-%COMP%_typing-dot{0%,60%,to{transform:translateY(0);opacity:.4}30%{transform:translateY(-4px);opacity:1}}@media(max-width:768px){.chat-bubble[_ngcontent-%COMP%]{max-width:90%}.chat-container[_ngcontent-%COMP%]{height:calc(100vh - var(--header-h) - 80px);border-radius:0;border-left:none;border-right:none}}"],changeDetection:0})};export{F as AdminInventoryChatComponent};
