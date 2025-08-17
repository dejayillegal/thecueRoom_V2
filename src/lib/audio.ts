export function supportsAudioWorklet(): boolean {
  return typeof AudioWorkletNode !== 'undefined' && Boolean((window as any).crossOriginIsolated);
}

export async function createAnalyser(context: AudioContext) {
  if (supportsAudioWorklet()) {
    try {
      await context.audioWorklet.addModule('processor.js');
      // In a real implementation we'd create an AudioWorkletNode here.
    } catch {
      // fall back silently
    }
  }
  return context.createAnalyser();
}
