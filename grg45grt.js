for(x=1;x < url.length;x++){
    emision_list[x] = `
    <a href="`+url[x]+`"><li class="emision-content">`+anime_emision[x]+`<span>`+fecha_emision[x]+`</span></li></a>
    `;
}
var emision_list__get = emision_list.toString().replace(',','');
document.getElementById('import--emision').innerHTML = `
    <ul class="emision-target">
        `+emision_list__get+`
    </ul>
`;
