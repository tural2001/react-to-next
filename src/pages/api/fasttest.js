import FastSpeedtest from 'fast-speedtest-api';

export default async function handler(req, res) {
  const speedtest = new FastSpeedtest({
    token: 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm&', // Hizmetinizden aldığınız API belirteci ile değiştirin
    verbose: false,
    timeout: 3000,
    https: true,
    urlCount: 5,
    bufferSize: 8,
    unit: FastSpeedtest.UNITS.Mbps,
  });

  try {
    const downloadSpeed = await speedtest.getSpeed();
    const uploadSpeed = await speedtest.getSpeed('upload');
    const latency = await speedtest.getSpeed('ping');
    console.log({ downloadSpeed });
    res.status(200).json({ downloadSpeed, uploadSpeed, latency });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
