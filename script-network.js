document.getElementById('network_number').onkeyup = function () {
    binary = (+document.getElementById('network_number').value).toString(2);
    input_number = Array.from(binary),
    network_ip = document.getElementById('ip_network').value.split('.'),
    list_subnet = [128, 64, 32, 16, 8, 4, 2, 1],
    appender = list_subnet[input_number.length - 1],
    number = 0,
    list_broadcast = [],
    //Data
    list_ips = [],
    list_broadcast_pri = [],
    available_ip = [],
    last_available_ip = []
}
function getIPs() {
    //Get IPs
    for (i = 0; i <= 1000; i = i + 1) {
        if (number > 254) {
            break
        }
        list_ips.push(network_ip.slice(0, network_ip.length - 1).join('.') + '.' + number);
        number += appender;
    }
    //Get Broadcasts
    for (i = 0; i <= list_ips.length - 1; i = i + 1) {
        var spliter = list_ips[i].split('.')
        list_broadcast.push((spliter[spliter.length - 1] - 1))
        //Get Available IPs
        var number_available = parseInt(spliter[spliter.length - 1]) + 1,
            getter = list_ips[i].split('.')
        getter.pop()
        getter.push(number_available.toString());
        var data = getter.join('.')
        available_ip.push(data)
    }
    list_broadcast.push(parseInt(list_ips[list_ips.length - 1].split('.')[3]) + appender - 2)
    list_broadcast.shift()
    //Append IP Network Broadcast
    for (i = 0; i <= list_ips.length - 1; i = i + 1) {
        var revalue = list_ips[i].split('.');
        revalue.pop()
        revalue.push(list_broadcast[i].toString())
        var setter = revalue.join('.')
        list_broadcast_pri.push(setter)
    }
    //Get Last Available IPs
    for (i = 0; i <= list_ips.length - 1; i = i + 1) {
        var revalue = list_ips[i].split('.'),
            dataNotString = list_broadcast[i] - 1
        revalue.pop()
        revalue.push(dataNotString.toString())
        var setter = revalue.join('.')
        last_available_ip.push(setter)
    }
    //Print The Data To User
    for (i = 0; i <= list_ips.length - 1; i = i + 1) {
        var create_tr = document.createElement('tr'),
            create_td_networkip = document.createElement('td'),
            create_td_broadcastip = document.createElement('td'),
            create_td_availableip = document.createElement('td'),
            create_td_Last_availableip = document.createElement('td'),
            //Create Text
            create_td_networkip_text = document.createTextNode(list_ips[i] + '/' + (24 + input_number.length)),
            create_td_broadcastip_text = document.createTextNode(list_broadcast_pri[i]),
            create_td_availableip_text = document.createTextNode(available_ip[i]),
            create_td_Last_availableip_text = document.createTextNode(last_available_ip[i])
            //Append Text To td Element
            create_td_networkip.appendChild(create_td_networkip_text);
            create_td_broadcastip.appendChild(create_td_broadcastip_text);
            create_td_availableip.appendChild(create_td_availableip_text);
            create_td_Last_availableip.appendChild(create_td_Last_availableip_text);
            //Append td Element To tr Element
            create_tr.appendChild(create_td_networkip)
            create_tr.appendChild(create_td_broadcastip)
            create_tr.appendChild(create_td_availableip)
            create_tr.appendChild(create_td_Last_availableip)
            //Append tr To Table
            document.getElementById('network').appendChild(create_tr)
    }
}
document.getElementById('start').onclick = getIPs