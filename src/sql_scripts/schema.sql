CREATE TABLE public.users
(
    id bigserial PRIMARY KEY,
    name text,
    email text,
	password text,
    "phoneNumber" numeric,
    "createdAt" date,
	"createdBy" text,
	"updatedAt" date,
	"updatedBy" text,
	"userTypeId" bigint
);

CREATE TABLE public.services
(
    id bigserial PRIMARY KEY,
    name text,
    description text,
	price numeric,
    "createdAt" date,
	"createdBy" text,
	"updatedAt" date,
	"updatedBy" text
);

CREATE TABLE public.bookings
(
    id bigserial PRIMARY KEY,
	"userId" bigint,
	"serviceId" bigint,
	"dateBooked" date,
	status text,
	"createdAt" date,
	"createdBy" text,
	"updatedAt" date,
	"updatedBy" text
);

CREATE TABLE public.locations
(
    id bigserial PRIMARY KEY,
    name text,
    address text,
	city text,
	state text,
	country text,
    "createdAt" date,
	"createdBy" text,
	"updatedAt" date,
	"updatedBy" text
);

CREATE TABLE public.feedback
(
    id bigserial PRIMARY KEY,
    "userId" bigint,
    "serviceId" bigint,
	rating numeric,
	"feedbackMessage" text,
    "createdAt" date,
	"createdBy" text,
	"updatedAt" date,
	"updatedBy" text
);

CREATE TABLE public.payment
(
    id bigserial PRIMARY KEY,
    "bookingId" bigint,
	amount numeric,
	"paymentDate" date,
	"paymentMethod" text,
    "createdAt" date,
	"createdBy" text,
	"updatedAt" date,
	"updatedBy" text
);

CREATE TABLE public."cancellationRefund"
(
    id bigserial PRIMARY KEY,
    "bookingId" bigint,
    "cancellationDate" date,
	"refundAmount" numeric,
    "createdAt" date,
	"createdBy" text,
	"updatedAt" date,
	"updatedBy" text
);


CREATE TABLE public."userTypes"
(
    id bigserial PRIMARY KEY,
    "userType" text,
    description text,
	"createdAt" date,
	"createdBy" text,
	"updatedAt" date,
	"updatedBy" text
);

INSERT INTO public.users (name, email, password, "phoneNumber", "createdAt", "createdBy", "updatedAt", "updatedBy", "userTypeId")
VALUES 
('John Doe', 'john.doe@example.com', 'password123', 1234567890, '2024-01-01', 'admin', '2024-01-01', 'admin', 1),
('Jane Smith', 'jane.smith@example.com', 'password456', 2345678901, '2024-01-02', 'admin', '2024-01-02', 'admin', 2),
('Alice Johnson', 'alice.johnson@example.com', 'password789', 3456789012, '2024-01-03', 'admin', '2024-01-03', 'admin', 3),
('Bob Brown', 'bob.brown@example.com', 'password321', 4567890123, '2024-01-04', 'admin', '2024-01-04', 'admin', 4),
('Charlie Davis', 'charlie.davis@example.com', 'password654', 5678901234, '2024-01-05', 'admin', '2024-01-05', 'admin', 5);


INSERT INTO public.services (name, description, price, "createdAt", "createdBy", "updatedAt", "updatedBy")
VALUES 
('Service A', 'Description of Service A', 100.0, '2024-01-01', 'admin', '2024-01-01', 'admin'),
('Service B', 'Description of Service B', 200.0, '2024-01-02', 'admin', '2024-01-02', 'admin'),
('Service C', 'Description of Service C', 300.0, '2024-01-03', 'admin', '2024-01-03', 'admin'),
('Service D', 'Description of Service D', 400.0, '2024-01-04', 'admin', '2024-01-04', 'admin'),
('Service E', 'Description of Service E', 500.0, '2024-01-05', 'admin', '2024-01-05', 'admin');


INSERT INTO public.bookings ("userId", "serviceId", "dateBooked", status, "createdAt", "createdBy", "updatedAt", "updatedBy")
VALUES 
(1, 1, '2024-01-10', 'Confirmed', '2024-01-01', 'admin', '2024-01-01', 'admin'),
(2, 2, '2024-01-11', 'Pending', '2024-01-02', 'admin', '2024-01-02', 'admin'),
(3, 3, '2024-01-12', 'Cancelled', '2024-01-03', 'admin', '2024-01-03', 'admin'),
(4, 4, '2024-01-13', 'Confirmed', '2024-01-04', 'admin', '2024-01-04', 'admin'),
(5, 5, '2024-01-14', 'Pending', '2024-01-05', 'admin', '2024-01-05', 'admin');


INSERT INTO public.locations (name, address, city, state, country, "createdAt", "createdBy", "updatedAt", "updatedBy")
VALUES 
('Location A', '123 Street A', 'City A', 'State A', 'Country A', '2024-01-01', 'admin', '2024-01-01', 'admin'),
('Location B', '456 Street B', 'City B', 'State B', 'Country B', '2024-01-02', 'admin', '2024-01-02', 'admin'),
('Location C', '789 Street C', 'City C', 'State C', 'Country C', '2024-01-03', 'admin', '2024-01-03', 'admin'),
('Location D', '101 Street D', 'City D', 'State D', 'Country D', '2024-01-04', 'admin', '2024-01-04', 'admin'),
('Location E', '112 Street E', 'City E', 'State E', 'Country E', '2024-01-05', 'admin', '2024-01-05', 'admin');


INSERT INTO public.feedback ("userId", "serviceId", rating, "feedbackMessage", "createdAt", "createdBy", "updatedAt", "updatedBy")
VALUES 
(1, 1, 4.5, 'Great service!', '2024-01-10', 'admin', '2024-01-10', 'admin'),
(2, 2, 3.0, 'Average experience.', '2024-01-11', 'admin', '2024-01-11', 'admin'),
(3, 3, 5.0, 'Excellent!', '2024-01-12', 'admin', '2024-01-12', 'admin'),
(4, 4, 2.5, 'Not satisfied.', '2024-01-13', 'admin', '2024-01-13', 'admin'),
(5, 5, 4.0, 'Good service.', '2024-01-14', 'admin', '2024-01-14', 'admin');


INSERT INTO public.payment ("bookingId", amount, "paymentDate", "paymentMethod", "createdAt", "createdBy", "updatedAt", "updatedBy")
VALUES 
(1, 100.0, '2024-01-10', 'Credit Card', '2024-01-10', 'admin', '2024-01-10', 'admin'),
(2, 200.0, '2024-01-11', 'PayPal', '2024-01-11', 'admin', '2024-01-11', 'admin'),
(3, 300.0, '2024-01-12', 'Credit Card', '2024-01-12', 'admin', '2024-01-12', 'admin'),
(4, 400.0, '2024-01-13', 'Debit Card', '2024-01-13', 'admin', '2024-01-13', 'admin'),
(5, 500.0, '2024-01-14', 'PayPal', '2024-01-14', 'admin', '2024-01-14', 'admin');


INSERT INTO public."cancellationRefund" ("bookingId", "cancellationDate", "refundAmount", "createdAt", "createdBy", "updatedAt", "updatedBy")
VALUES 
(1, '2024-01-15', 50.0, '2024-01-15', 'admin', '2024-01-15', 'admin'),
(2, '2024-01-16', 100.0, '2024-01-16', 'admin', '2024-01-16', 'admin'),
(3, '2024-01-17', 150.0, '2024-01-17', 'admin', '2024-01-17', 'admin'),
(4, '2024-01-18', 200.0, '2024-01-18', 'admin', '2024-01-18', 'admin'),
(5, '2024-01-19', 250.0, '2024-01-19', 'admin', '2024-01-19', 'admin');


INSERT INTO public."userTypes" ("userType", description, "createdAt", "createdBy", "updatedAt", "updatedBy")
VALUES 
('Admin', 'Administrator with full access', '2024-01-01', 'admin', '2024-01-01', 'admin'),
('Customer', 'Regular customer', '2024-01-02', 'admin', '2024-01-02', 'admin'),
('Provider', 'Service provider', '2024-01-03', 'admin', '2024-01-03', 'admin'),
('Manager', 'Manager with limited access', '2024-01-04', 'admin', '2024-01-04', 'admin'),
('Guest', 'Guest user with minimal access', '2024-01-05', 'admin', '2024-01-05', 'admin');


SELECT * FROM public.users;

SELECT * FROM public.services;

SELECT * FROM public.bookings;

SELECT * FROM public.locations;

SELECT * FROM public.feedback;

SELECT * FROM public.payment;

SELECT * FROM public."cancellationRefund";

SELECT * FROM public."userTypes";
