const Service  = require('../models/Service');

const serviceData = [
    {
    service_name: 'AppleTV+'},
    {
    service_name: 'Peacock'},
    {
    service_name: 'Hulu'},
    {
    service_name: 'Netflix'},
    {
    service_name: 'HBOMax'}
]


const seedServices = () => Service.bulkCreate(serviceData);

module.exports = seedServices;